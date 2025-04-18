import React from 'react';
import { cn } from "../../../lib/utils"
import type { ChatMessageDb } from '../../types/db'; // Updated import

// Use ChatMessageDb, but might need adjustment if isError is still needed externally
export interface ChatMessageBaseProps extends Pick<ChatMessageDb, 'role' | 'content'> {
  // If error styling is needed based on transient state, add prop back
  isError?: boolean; 
}

export const ChatMessageBase: React.FC<ChatMessageBaseProps> = ({
  role,
  content,
  isError = false, // Keep prop for now, but it's not from DB type
}) => {
  // Type guard to narrow role for comparison
  const isUser = role === 'user';

  // Base classes for all messages
  const baseClasses = 'py-2 rounded-lg max-w-[85%] text-base leading-relaxed break-words';

  // Role-specific classes - check role explicitly
  const roleClasses = 
    role === 'user'
      ? 'bg-gray-400 text-gray-900 self-end px-4' // User
      : isError // Check transient error prop
      ? 'bg-red-100 text-red-800 border border-red-200 self-start px-4' // Error style
      : role === 'assistant' || role === 'system' // Handle assistant/system normally
      ? 'text-neutral-100 self-start' // Assistant/System - removed bg-gray-300, changed text color
      : 'bg-blue-100 text-blue-800 self-start px-4'; // Fallback/other roles (bookmark, flashcard - should not use this base directly)

  // Alignment container classes
  const alignmentClasses = isUser ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex w-full my-2 ${alignmentClasses}`}>
      <div className={cn(baseClasses, roleClasses)}>
        {/* Reverted to direct <p> tag rendering */} 
        <p className="whitespace-pre-wrap">{content ?? ''}</p> 
        {/* Removed conditional structure: 
        {role === 'assistant' || role === 'system' || isError ? (...) : (...) } 
        */}
      </div>
    </div>
  );
}; 