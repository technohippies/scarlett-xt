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
import type { ChatHistoryItem } from '../../src/types/db';

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
      try {
        const configSql = 'SELECT config_json FROM user_configuration WHERE id = 1;';
        const configRows = await queryDb(configSql); 
        console.log('[ChatPage] Raw DB Result for config:', configRows);
        if (configRows?.[0]?.config_json) {
          const config = JSON.parse(configRows[0].config_json);
          console.log('[ChatPage] Loaded User Configuration from DB:', config);
          setConfigLoaded(true);
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

      const cleanup = onMessage(
        'ollamaResponse',
        async (message) => {
          const chunk = message.data as OllamaStreamChunk;
          console.log('[ChatPage] Received ollamaResponse chunk:', chunk);
    
          if (chunk.status === 'chunk' && chunk.content) {
            // --- Detect and handle first chunk *before* updating messages state --- 
            const lastMessage = messages[messages.length - 1]; // Check current state *before* update
            if (!(lastMessage && lastMessage.type === 'message' && lastMessage.data.role === 'assistant' && lastMessage.data.id === -1)) {
              // If the last message isn't the temporary one, this must be the first chunk
              console.log('[ChatPage] First chunk detected, setting isLoading to false.');
              setIsLoading(false); // Hide loading indicator immediately
            }
            // ---------------------------------------------------------------------

            // --- Stream UI Update (remains the same) ---
            setMessages(prevMessages => {
              const currentLastItem = prevMessages[prevMessages.length - 1]; // Use prevMessages here
              if (currentLastItem && currentLastItem.type === 'message' && currentLastItem.data.role === 'assistant' && currentLastItem.data.id === -1) { 
                // Update existing temporary assistant message
                return prevMessages.map((msg, index) => {
                  if (index === prevMessages.length - 1 && msg.type === 'message') { 
                    return { ...msg, data: { ...msg.data, content: (msg.data.content ?? '') + chunk.content } };
                  }
                  return msg;
                });
              } else {
                // Add new temporary assistant message
                const newAssistantMessage: ChatHistoryItem = {
                  type: 'message',
                  data: {
                    id: -1, 
                    role: 'assistant',
                    content: chunk.content,
                    timestamp: new Date().toISOString(),
                  }
                };
                return [...prevMessages, newAssistantMessage];
              }
            });
            accumulatedResponseRef.current += chunk.content; 
            // --- End Stream UI Update ---
          } else if (chunk.status === 'complete' || chunk.status === 'error' || chunk.status === 'done') {
              // setIsLoading(false); // REMOVED - Loading is stopped on first chunk now
              const finalContent = accumulatedResponseRef.current;
              accumulatedResponseRef.current = ''; // Clear accumulator

              // Remove the temporary message before saving/refetching
              setMessages(prev => prev.filter(item => {
                // Check item type before accessing data.id
                if (item.type === 'message') {
                  return item.data.id !== -1; // Keep if not the temporary message
                }
                return true; // Keep other item types (bookmarks, flashcards)
              }));
    
              if (finalContent.trim() || chunk.status === 'error') { // Save even if only error content
                  let contentToSave = finalContent.trim();
                  if (chunk.status === 'error') {
                     contentToSave += `\n\nError: ${chunk.error || 'Unknown Error'}`;
                  }

                  if (contentToSave) { // Ensure we don't save completely empty messages if error was blank
                    try {
                        console.log('[ChatPage] Saving final assistant message to DB...');
                        await createChatMessage({
                            role: 'assistant',
                            content: contentToSave,
                        });
                        console.log('[ChatPage] Refetching history after assistant message saved.');
                        const updatedHistory = await getChatHistory();
                        setMessages(updatedHistory);
                    } catch (dbError) {
                        console.error('[ChatPage] Failed to save final assistant message to DB:', dbError);
                        // Fallback: Re-add the final message directly to state if DB save fails (using a different temp ID if needed)
                        setMessages(prevMessages => [
                          ...prevMessages, // Keep history up to the point before temporary message removal
                          { type: 'message', data: { id: Date.now(), role: 'assistant', content: contentToSave, timestamp: new Date().toISOString() } } 
                        ]);
                    }
                  }
              } else {
                  console.log('[ChatPage] No final content, not saving empty message.');
                  // If stream completed without error but no content, ensure loading is off
                  setIsLoading(false); 
              }
          } else {
              console.warn('[ChatPage] Received unexpected or incomplete ollamaResponse chunk format:', chunk);
          }
        },
      );

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

    const newUserMessage: ChatHistoryItem = {
      type: 'message',
      data: {
        id: Date.now(),
        role: 'user',
        content: trimmedInput,
        timestamp: new Date().toISOString(),
      }
    };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);

    setInputValue('');
    setIsLoading(true);

    try {
      await createChatMessage({ role: 'user', content: trimmedInput });

      console.log(`[ChatPage] Sending ollamaChatRequest to background.`);
      const historyForLLM = messages.flatMap((item): { role: 'user' | 'assistant'; content: string }[] => {
          if (item.type === 'message' && (item.data.role === 'user' || item.data.role === 'assistant')) {
              return [{ role: item.data.role, content: item.data.content ?? '' }];
          } 
          return [];
      });
          
      await sendMessage('ollamaChatRequest', {
         prompt: trimmedInput,
         history: historyForLLM,
      });
      
    } catch (error) {
        console.error('[ChatPage] Error during send process (saving/sending): ', error);
        setIsLoading(false);
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
                  } else if (item.flashcard.type === 'front_back') {
                     return <FlashcardFrontBackMessage key={`fb-${item.message.id}`} flashcard={item.flashcard} />;
                  }
                  // If flashcard type is not handled above, return null for this case
                  console.warn(`[ChatPage Render] Unhandled flashcard type: ${item.flashcard.type}`);
                  return null; 
              }
              // If item.type is somehow not message/bookmark/flashcard (shouldn't happen with strict types),
              // TypeScript might complain. If so, add a `default:` case to the switch returning null.
              // For now, assume the switch is exhaustive for ChatHistoryItem['type'].
            })
          )}
          {isLoading && <AssistantLoadingMessage />}
        </div>
        <div ref={messagesEndRef} />
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