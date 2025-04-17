import React from 'react';
import { BookmarkSimple } from '@phosphor-icons/react';

export interface BookmarkChatMessageProps {
  /** The title of the bookmarked page */
  title: string;
  /** The URL of the bookmarked page */
  url: string;
  /** Optional unique key for lists */
  id?: string | number;
}

export const BookmarkChatMessage: React.FC<BookmarkChatMessageProps> = ({
  title,
  url,
  id,
}) => {
  // Basic validation
  if (!title || !url) {
    console.warn('BookmarkChatMessage requires both title and url.');
    return null; // Don't render if essential props are missing
  }

  return (
    <div
      className="flex items-center w-full max-w-md mx-auto my-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200"
      key={id} // Use key if provided for list rendering
    >
      {/* Icon Container */}
      <div className="flex-shrink-0 mr-3">
        <BookmarkSimple
          size={28} // Slightly larger icon
          weight="duotone"
          className="text-red-500" // Tailwind class for #ef4444
        />
      </div>

      {/* Content Container */}
      <div className="flex-grow min-w-0"> {/* Allow text to truncate */}
        <span className="text-xs text-gray-500 block mb-0.5">Bookmarked page:</span>
        <a
          href={url}
          target="_blank" // Open in new tab
          rel="noopener noreferrer" // Security best practice
          className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:underline break-words line-clamp-2" // Allow wrapping, limit to 2 lines
          title={title} // Show full title on hover
        >
          {title}
        </a>
      </div>
    </div>
  );
}; 