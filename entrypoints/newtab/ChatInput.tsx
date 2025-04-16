import React from 'react';
import { Textarea } from '../../src/components/ui/textarea';
import { Button } from '../../src/components/ui/button';
import { PaperPlaneTilt } from '@phosphor-icons/react';

interface ChatInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend, isLoading }) => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send message on Enter press (Shift+Enter for newline)
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent default newline behavior
      if (!isLoading) {
          onSend();
      }
    }
  };

  return (
    <div className="flex items-end space-x-2">
      <Textarea
        placeholder="Send a message..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        rows={1} // Start with one row
        className="flex-1 resize-none min-h-[40px] max-h-[200px] overflow-y-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isLoading}
      />
      <Button 
        type="button" 
        size="icon" 
        onClick={onSend} 
        disabled={isLoading || !value.trim()}
        aria-label="Send message"
      >
        <PaperPlaneTilt size={18} />
      </Button>
    </div>
  );
};

export default ChatInput; 