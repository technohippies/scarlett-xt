import React from 'react';
import { cn } from '../../../lib/utils';

export const AssistantLoadingMessage: React.FC = () => {
  // Mimic base classes and assistant role classes for the bubble
  const baseClasses = 'py-2 px-4 rounded-lg max-w-[85%] text-base';
  const roleClasses = 'bg-gray-100 text-gray-900 self-start';
  const alignmentClasses = 'justify-start';

  return (
    <div className={`flex w-full my-2 ${alignmentClasses}`}>
      <div className={cn(baseClasses, roleClasses)}>
        <div className="flex space-x-1 items-center">
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}; 