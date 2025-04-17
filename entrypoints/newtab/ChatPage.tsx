import React, { useState, useEffect, useRef, useCallback } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react';
import { Button } from '../../src/components/ui/button';
import { ChatMessageBase } from '../../src/components/chat/ChatMessageBase';
import { AssistantLoadingMessage } from '../../src/components/chat/AssistantLoadingMessage';
import ChatInput from './ChatInput';
import { queryDb } from '../../utils/db';
import { sendMessage, onMessage } from '../../utils/messaging';
// Explicitly alias the imported type
import type { ChatMessage as AppChatMessage } from '../../src/types/chat';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<AppChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAssistantMessageId, setCurrentAssistantMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [configLoaded, setConfigLoaded] = useState(false);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch configuration from DB on mount
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const sql = 'SELECT config_json FROM user_configuration WHERE id = 1;';
        const result = await queryDb(sql); 
        console.log('[ChatPage] Raw DB Result for config:', result);
        // Correctly parse the PGlite result object
        if (result?.rows?.[0]?.config_json) {
          const config = JSON.parse(result.rows[0].config_json);
          console.log('[ChatPage] Loaded User Configuration from DB:', config);
          setConfigLoaded(true); // Mark config as loaded
        } else {
          console.log('[ChatPage] No user configuration found in DB.');
          // TODO: Handle missing config - maybe redirect to onboarding or show message
        }
      } catch (error) {
        console.error('[ChatPage] Error loading configuration from DB:', error);
      }
    };
    fetchConfig();
  }, []); // Empty dependency array means run once on mount

  // --- Listener for Background Stream Responses (Updated Logic) ---
  useEffect(() => {
      console.log('[ChatPage] Setting up ollamaResponse listener.');
      const cleanup = onMessage('ollamaResponse', (message) => {
          const chunk = message.data;
          console.log('[ChatPage] Received ollamaResponse chunk:', chunk);

          setMessages((prevMessages) => {
              const lastMessage = prevMessages[prevMessages.length - 1];

              if (chunk.status === 'chunk') {
                  setIsLoading(false);
                  // Check if the VERY last message is the assistant message we are building
                  if (lastMessage && lastMessage.role === 'assistant' && !lastMessage.isError) {
                      // Append chunk to the last message
                      return prevMessages.map((msg, index) => 
                          index === prevMessages.length - 1 
                          ? { ...msg, content: msg.content + chunk.content } 
                          : msg
                      );
                  } else {
                      // Last message is user, error, or list is empty. Create NEW assistant message.
                      const newAssistantMessage: AppChatMessage = {
                         id: `assistant-${Date.now()}-${Math.random()}`,
                         role: 'assistant',
                         content: chunk.content,
                       };
                      return [...prevMessages, newAssistantMessage];
                  }
              } else if (chunk.status === 'done') {
                  setIsLoading(false); 
                  console.log('[ChatPage] Stream finished. Stats:', chunk.stats);
                  // Make sure the last message isn't empty if stream completes without chunks (unlikely but safe)
                  if (lastMessage && lastMessage.role === 'assistant' && lastMessage.content === '') {
                    return prevMessages.slice(0, -1); // Remove empty placeholder if it exists
                  }
              } else if (chunk.status === 'error') {
                  setIsLoading(false);
                  // Remove empty placeholder if the last message was one
                  const messagesWithoutPlaceholder = (lastMessage && lastMessage.role === 'assistant' && lastMessage.content === '') 
                      ? prevMessages.slice(0, -1) 
                      : prevMessages;
                  // Append a new error message
                  const errorMessage: AppChatMessage = {
                       id: `error-${Date.now()}`,
                       role: 'assistant',
                       content: `Error: ${chunk.error}`,
                       isError: true,
                  };
                  return [...messagesWithoutPlaceholder, errorMessage];
              } else if (chunk.status === 'override_granted') {
                   setIsLoading(false);
                   // Remove empty placeholder if the last message was one
                   const messagesWithoutPlaceholder = (lastMessage && lastMessage.role === 'assistant' && lastMessage.content === '') 
                      ? prevMessages.slice(0, -1) 
                      : prevMessages;
                   // Add the override message
                   const overrideMessage: AppChatMessage = {
                       id: `override-${Date.now()}`,
                       role: 'assistant',
                       content: chunk.content,
                   };
                  return [...messagesWithoutPlaceholder, overrideMessage];
               }
              return prevMessages;
          });
      });
      return () => {
          console.log('[ChatPage] Cleaning up ollamaResponse listener.');
          cleanup();
      };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  // Use useCallback
  const handleSend = useCallback(async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading || !configLoaded) {
       if (!configLoaded) console.warn("[ChatPage] Cannot send message: Config not loaded yet.");
       return;
     }

    // Use aliased type
    const newUserMessage: AppChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedInput,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
        console.log(`[ChatPage] Sending ollamaChatRequest to background.`);
        const historyToSend = messages.concat(newUserMessage);
        await sendMessage('ollamaChatRequest', {
           prompt: trimmedInput,
           history: historyToSend,
        });
    } catch (error) {
        console.error('[ChatPage] Error sending chat request message:', error);
        setIsLoading(false);
        // Use aliased type for error message
        setMessages(prev => [
             ...prev,
             { id: `send-error-${Date.now()}`, role: 'assistant', content: `Failed to send message: ${error instanceof Error ? error.message : String(error)}`, isError: true } as AppChatMessage // Type assertion might be needed here
           ]);
    }
  }, [inputValue, isLoading, messages, configLoaded]);

  // Function to open the settings page
  const openSettingsPage = () => {
    browser.runtime.openOptionsPage();
  };

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      {/* Header with Settings Button */}
      <header className="sticky top-0 z-10 flex h-[57px] items-center justify-end border-b bg-background px-4">
         <Button variant="ghost" size="icon" onClick={openSettingsPage} aria-label="Settings">
            <Gear size={20} />
          </Button>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mx-auto max-w-3xl">
          {messages.length === 0 && !isLoading && (
            <div className="flex justify-center items-center h-full">
              <p className="text-muted-foreground">Start chatting with Scarlett...</p>
            </div>
          )}
          {messages.map((msg) => (
            <ChatMessageBase key={msg.id} {...msg} />
          ))}
          
          {isLoading && <AssistantLoadingMessage />} 

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="sticky bottom-0 z-10 border-t bg-background p-4 md:p-6">
        <div className="mx-auto max-w-3xl">
          <ChatInput 
            value={inputValue}
            onChange={handleInputChange}
            onSend={handleSend}
            isLoading={isLoading}
          />
        </div>
      </footer>
    </div>
  );
};

export default ChatPage; 