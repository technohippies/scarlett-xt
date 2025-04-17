import React from 'react';
import { cn } from "../../../lib/utils"
import type { ChatMessage } from '../../types/chat'; // Import the type

// Removed default export if not needed as named export is common
export const ChatMessageBase: React.FC<ChatMessage> = ({
  role,
  content,
  isError = false,
}) => {
  const isUser = role === 'user';

  // Base classes for all messages
  const baseClasses = 'py-2 px-4 rounded-lg max-w-[85%] text-base leading-relaxed break-words';

  // Role-specific classes
  const roleClasses = isUser
    ? 'bg-gray-400 text-gray-900 self-end' // User: Even Darker grey
    : isError
    ? 'bg-red-100 text-red-800 border border-red-200 self-start' // Error message style
    : 'bg-gray-300 text-gray-900 self-start'; // Assistant: Even Darker grey (but lighter than user)

  // Alignment container classes
  const alignmentClasses = isUser ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex w-full my-2 ${alignmentClasses}`}>
      <div className={cn(baseClasses, roleClasses)}>
        {/* Display message content. Handle potential newlines. */}
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}; 