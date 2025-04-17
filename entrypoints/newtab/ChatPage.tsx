import React, { useState, useEffect, useRef, useCallback } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react';
import { Button } from '../../src/components/ui/button';
import Message, { type ChatMessage } from './Message';
import ChatInput from './ChatInput';
import { queryDb } from '../../utils/db';
import { sendMessage, onMessage, type OllamaStreamChunk } from '../../utils/messaging';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
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

  // --- Listener for Background Stream Responses ---
  useEffect(() => {
      console.log('[ChatPage] Setting up ollamaResponse listener.');
      const cleanup = onMessage('ollamaResponse', (message) => {
          const chunk = message.data;
          console.log('[ChatPage] Received ollamaResponse chunk:', chunk);

          setMessages((prevMessages) => {
              // Find the last message
              const lastMessage = prevMessages[prevMessages.length - 1];

              if (chunk.status === 'chunk') {
                  // If the last message is the assistant message we are building, append to it
                  if (lastMessage && lastMessage.id === currentAssistantMessageId && lastMessage.role === 'assistant') {
                      return [
                          ...prevMessages.slice(0, -1),
                          { ...lastMessage, content: lastMessage.content + chunk.content },
                      ];
                  } else {
                      // This should ideally not happen if currentAssistantMessageId is set correctly
                      // But as a fallback, create a new assistant message
                      console.warn("[ChatPage] Received chunk but no matching assistant message ID found. Creating new message.");
                      const newAssistantMessage: ChatMessage = {
                         id: currentAssistantMessageId || `assistant-${Date.now()}`, // Use ID if available, else generate
                         role: 'assistant',
                         content: chunk.content,
                       };
                      setCurrentAssistantMessageId(newAssistantMessage.id); // Ensure ID is set
                      return [...prevMessages, newAssistantMessage];
                  }
              } else if (chunk.status === 'done') {
                  setIsLoading(false); // Request finished
                  setCurrentAssistantMessageId(null); // Reset tracker
                  console.log('[ChatPage] Stream finished. Stats:', chunk.stats);
                  // Optionally add stats display or logging
              } else if (chunk.status === 'error') {
                  setIsLoading(false); // Request finished (with error)
                  setCurrentAssistantMessageId(null); // Reset tracker
                  // Append an error message or display it differently
                  const errorMessage: ChatMessage = {
                       id: `error-${Date.now()}`,
                       role: 'assistant', // Or a special 'error' role?
                       content: `Error: ${chunk.error}`,
                       isError: true, // Add a flag for styling
                  };
                  return [...prevMessages, errorMessage];
              } else if (chunk.status === 'override_granted') {
                   setIsLoading(false);
                   setCurrentAssistantMessageId(null);
                   // Add the override message from the background
                   const overrideMessage: ChatMessage = {
                       id: `override-${Date.now()}`,
                       role: 'assistant', // Or a special 'system' role?
                       content: chunk.content,
                   };
                  return [...prevMessages, overrideMessage];
               }

              return prevMessages; // No change for other statuses (if any)
          });
      });

       // Cleanup function to remove the listener when the component unmounts
      return () => {
          console.log('[ChatPage] Cleaning up ollamaResponse listener.');
          cleanup();
      };
  }, [currentAssistantMessageId]); // Re-run if assistant message ID changes (though ideally it shouldn't mid-stream)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  // Use useCallback to prevent unnecessary re-renders of ChatInput if props don't change
  const handleSend = useCallback(async () => {
    const trimmedInput = inputValue.trim();
    // Ensure config is loaded before sending
    if (!trimmedInput || isLoading || !configLoaded) {
       if (!configLoaded) console.warn("[ChatPage] Cannot send message: Config not loaded yet.");
       return;
     }

    // Optimistically add user message
    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedInput,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue(''); // Clear input
    setIsLoading(true);

    // Prepare a placeholder for the assistant's response
    const assistantMsgId = `assistant-${Date.now()}`;
    const placeholderAssistantMessage: ChatMessage = {
        id: assistantMsgId,
        role: 'assistant',
        content: '', // Start empty, will be filled by stream
    };
    setMessages((prev) => [...prev, placeholderAssistantMessage]);
    setCurrentAssistantMessageId(assistantMsgId); // Track the ID of the message we're building

    // --- Send message to background --- 
    try {
        console.log(`[ChatPage] Sending ollamaChatRequest to background.`);
        // Prepare history (exclude the empty placeholder assistant message)
        const historyToSend = messages.slice(0, -1); // Send all messages *before* the placeholder

        await sendMessage('ollamaChatRequest', {
           prompt: trimmedInput,
           history: historyToSend, // Send previous messages as history
        });
        // Don't setIsLoading(false) here; wait for 'done' or 'error' chunk
    } catch (error) {
        console.error('[ChatPage] Error sending chat request message:', error);
        setIsLoading(false); // Stop loading on send error
        setCurrentAssistantMessageId(null);
        // Optionally remove the placeholder assistant message or add an error message
        setMessages(prev => [
            ...prev.filter(m => m.id !== assistantMsgId), // Remove placeholder
             { id: `send-error-${Date.now()}`, role: 'assistant', content: `Failed to send message: ${error instanceof Error ? error.message : String(error)}`, isError: true }
           ]);
    }
  }, [inputValue, isLoading, messages, configLoaded]); // Include dependencies for useCallback

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
          {/* Render Messages */}
          {messages.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <p className="text-muted-foreground">Start chatting with Scarlett...</p>
            </div>
          )}
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          {/* Empty div to scroll to */}
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