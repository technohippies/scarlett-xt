import React, { useState, useEffect, useRef, useCallback } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react';
import { Button } from '../../src/components/ui/button';
import { ChatMessageBase } from '../../src/components/chat/ChatMessageBase';
import { AssistantLoadingMessage } from '../../src/components/chat/AssistantLoadingMessage';
import { BookmarkChatMessage } from '../../src/components/chat/BookmarkChatMessage';
import { FlashcardClozeMessage } from '../../src/components/chat/FlashcardClozeMessage';
import { FlashcardFrontBackMessage } from '../../src/components/chat/FlashcardFrontBackMessage';
import ChatInput from './ChatInput';
import { queryDb, getChatHistory, createChatMessage } from '../../utils/db';
import { sendMessage, onMessage } from '../../utils/messaging';
import type { ChatHistoryItem, ChatMessageDb } from '../../src/types/db';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatHistoryItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [configLoaded, setConfigLoaded] = useState(false);
  
  const accumulatedResponseRef = useRef<string>('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const loadInitialData = async () => {
      setIsHistoryLoading(true);
      let configFound = false;
      try {
        const configSql = 'SELECT config_json FROM user_configuration WHERE id = 1;';
        const configResult = await queryDb(configSql); 
        console.log('[ChatPage] Raw DB Result for config:', configResult);
        if (configResult?.rows?.[0]?.config_json) {
          const config = JSON.parse(configResult.rows[0].config_json);
          console.log('[ChatPage] Loaded User Configuration from DB:', config);
          setConfigLoaded(true);
          configFound = true;
        } else {
          console.log('[ChatPage] No user configuration found in DB.');
        }
        
        const history = await getChatHistory();
        setMessages(history);
        console.log(`[ChatPage] Loaded ${history.length} chat history items.`);

      } catch (error) {
        console.error('[ChatPage] Error loading initial data from DB:', error);
      } finally {
        setIsHistoryLoading(false);
      }
    };
    loadInitialData();
  }, []);

  useEffect(() => {
      console.log('[ChatPage] Setting up ollamaResponse listener.');
      
      accumulatedResponseRef.current = '';

      const cleanup = onMessage('ollamaResponse', async (message) => {
          const chunk = message.data;
          console.log('[ChatPage] Received ollamaResponse chunk:', chunk);

          if (chunk.status === 'chunk') {
              accumulatedResponseRef.current += (chunk.content || '');
          } else if (chunk.status === 'done' || chunk.status === 'error') {
              setIsLoading(false);
              const finalContent = accumulatedResponseRef.current + (chunk.status === 'error' ? `\n\nError: ${chunk.error}` : '');
              accumulatedResponseRef.current = '';
              
              if (finalContent.trim()) {
                  try {
                      console.log('[ChatPage] Saving final assistant message to DB...');
                      await createChatMessage({
                          role: 'assistant',
                          content: finalContent.trim(),
                      });
                      console.log('[ChatPage] Refetching history after assistant message saved.');
                      const updatedHistory = await getChatHistory();
                      setMessages(updatedHistory);
                  } catch (dbError) {
                      console.error('[ChatPage] Failed to save assistant message to DB:', dbError);
                  }
              } else {
                   console.log('[ChatPage] No content accumulated, not saving empty message.');
              }
          } else if (chunk.status === 'override_granted') {
              setIsLoading(false); 
              accumulatedResponseRef.current = '';
              console.warn('[ChatPage] Override granted, handling not fully implemented.');
          }
      });

      return () => {
          console.log('[ChatPage] Cleaning up ollamaResponse listener.');
          if (accumulatedResponseRef.current) {
              console.warn('[ChatPage] Unmounting with accumulated response - message not saved. Content:', accumulatedResponseRef.current);
          }
          cleanup();
      };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSend = useCallback(async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading || !configLoaded || isHistoryLoading) {
       if (!configLoaded) console.warn("[ChatPage] Cannot send message: Config not loaded yet.");
       if (isHistoryLoading) console.warn("[ChatPage] Cannot send message: History still loading.");
       return;
     }

    setInputValue('');
    setIsLoading(true);

    let savedUserMessage: ChatMessageDb | null = null;
    try {
      savedUserMessage = await createChatMessage({ role: 'user', content: trimmedInput });
      console.log('[ChatPage] User message saved to DB:', savedUserMessage);

      console.log(`[ChatPage] Sending ollamaChatRequest to background.`);
      const historyForLLM = messages.flatMap((item): { role: 'user' | 'assistant'; content: string }[] => {
          if (item.type === 'message' && (item.data.role === 'user' || item.data.role === 'assistant')) {
              return [{ role: item.data.role, content: item.data.content ?? '' }];
          } else {
              return []; // Return empty array for non-matching items
          }
      });
          
      await sendMessage('ollamaChatRequest', {
         prompt: trimmedInput,
         history: historyForLLM,
      });
      
      const updatedHistory = await getChatHistory();
      setMessages(updatedHistory);

    } catch (error) {
        console.error('[ChatPage] Error during send process:', error);
        setIsLoading(false);
        const historyAfterError = await getChatHistory();
        setMessages(historyAfterError);
    }
  }, [inputValue, isLoading, messages, configLoaded, isHistoryLoading]);

  const openSettingsPage = () => {
    browser.runtime.openOptionsPage();
  };

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 flex h-[57px] items-center justify-end border-b bg-background px-4">
         <Button variant="ghost" size="icon" onClick={openSettingsPage} aria-label="Settings">
            <Gear size={20} />
          </Button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mx-auto max-w-3xl">
          {isHistoryLoading ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-muted-foreground">Loading history...</p>
            </div>
          ) : messages.length === 0 && !isLoading ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-muted-foreground">Start chatting with Scarlett...</p>
            </div>
          ) : (
            messages.map((item) => {
              if (item.type === 'message' && (item.data.id === null || item.data.id === undefined)) {
                  console.error('[ChatPage Render] Found message item with null/undefined ID:', item);
              }

              switch (item.type) {
                case 'message':
                  const messageKey = `msg-${item.data.id ?? item.data.timestamp ?? Math.random()}`;
                  return <ChatMessageBase key={messageKey} role={item.data.role} content={item.data.content} />;
                case 'bookmark':
                  return <BookmarkChatMessage key={`bm-${item.message.id}`} bookmark={item.bookmark} />; 
                case 'flashcard':
                  if (item.flashcard.type === 'cloze') {
                     return <FlashcardClozeMessage key={`fc-${item.message.id}`} flashcard={item.flashcard} />;
                  } else {
                     return <FlashcardFrontBackMessage key={`fb-${item.message.id}`} flashcard={item.flashcard} />;
                  }
                default:
                  console.warn('Unknown chat history item type:', item);
                  return null;
              }
            })
          )}
          
          {isLoading && <AssistantLoadingMessage />} 

          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="sticky bottom-0 z-10 border-t bg-background p-4 md:p-6">
        <div className="mx-auto max-w-3xl">
          <ChatInput 
            value={inputValue}
            onChange={handleInputChange}
            onSend={handleSend}
            isLoading={isLoading || isHistoryLoading}
          />
        </div>
      </footer>
    </div>
  );
};

export default ChatPage; 