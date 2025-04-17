import React from 'react';
import { BookmarkSimple } from '@phosphor-icons/react';
import type { Bookmark } from '../../types/db'; // Import the Bookmark type

export interface BookmarkChatMessageProps {
  /** The full bookmark object */
  bookmark: Bookmark;
  // Remove individual props: title, url, id
}

// Define character limits
const TITLE_MAX_CHARS = 30;
const HOSTNAME_MAX_CHARS = 25;

/** Truncates text if it exceeds a maximum length */
const truncateText = (text: string | null | undefined, maxLength: number): string => {
  if (!text) return '';
  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

export const BookmarkChatMessage: React.FC<BookmarkChatMessageProps> = ({
  bookmark // Destructure the bookmark object
}) => {
  const { id, title, url } = bookmark; // Extract needed fields

  // Basic validation
  if (!url) {
    console.warn('BookmarkChatMessage requires a bookmark with a url.');
    return null;
  }

  let hostname = '';
  try {
    hostname = new URL(url).hostname;
    hostname = hostname.replace(/^www\./i, '');
  } catch (error) {
    console.warn(`Invalid URL provided to BookmarkChatMessage: ${url}`, error);
    hostname = truncateText(url, HOSTNAME_MAX_CHARS); // Fallback
  }

  // Truncate for main display (handle potentially null title)
  const displayTitle = truncateText(title, TITLE_MAX_CHARS);
  const displayHostname = truncateText(hostname, HOSTNAME_MAX_CHARS);

  // Prepare hover title (full info)
  const hoverTitle = `${title || '(No Title)'} | ${url}`;

  return (
    <div
      className="inline-flex items-center gap-2 mx-auto my-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-sm"
      key={`bm-msg-${id}`} // Use bookmark ID for key
      title={hoverTitle} // Keep tooltip on the main visible part
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <BookmarkSimple size={24} weight="duotone" className="text-red-500" />
      </div>
      {/* Content - Using darker text */}
      <div className="flex-grow min-w-0">
        <span className="text-gray-900">{displayTitle || '(No Title)'}</span>
        <span className="text-gray-600"> | {displayHostname}</span>
      </div>
    </div>
  );
}; 