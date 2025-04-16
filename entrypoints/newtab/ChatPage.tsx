import React, { useState, useEffect, useRef } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react';
import { Button } from '../../src/components/ui/button';
import Message, { type ChatMessage } from './Message';
import ChatInput from './ChatInput';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // Placeholder for loading state
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSend = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(), // Simple unique ID for now
      role: 'user',
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue(''); // Clear input immediately
    setIsLoading(true);

    // --- Placeholder for sending to background script and getting response ---
    console.log("TODO: Send message to background:", trimmedInput);
    // Simulate assistant response after a delay
    setTimeout(() => {
      const assistantResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `You said: "${trimmedInput}". I'm just a placeholder!`,
      };
      setMessages((prev) => [...prev, assistantResponse]);
      setIsLoading(false);
    }, 1500);
    // --- End Placeholder ---
  };

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