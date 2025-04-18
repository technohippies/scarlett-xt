import React from 'react';
import { BracketsCurly } from '@phosphor-icons/react';
import type { Flashcard } from '../../types/db'; // Import the Flashcard type

export interface FlashcardClozeMessageProps {
  /** The full flashcard object */
  flashcard: Flashcard;
  // Remove individual props: clozeText, id
}

const CLOZE_TEXT_MAX_CHARS = 60; // Allow slightly more for context

/** Truncates text if it exceeds a maximum length */
const truncateText = (text: string | null | undefined, maxLength: number): string => {
  if (!text) return '';
  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

/** Formats cloze text for display, truncating if necessary */
const formatClozeDisplay = (text: string | null | undefined): React.ReactNode => {
  if (!text) return '[Empty Cloze Text]';

  // Check if the *original* text length exceeds the limit first
  if (text.length > CLOZE_TEXT_MAX_CHARS) {
    return truncateText(text, CLOZE_TEXT_MAX_CHARS);
  }

  // If text fits, return the original text as is (no special styling needed)
  return text;
};

export const FlashcardClozeMessage: React.FC<FlashcardClozeMessageProps> = ({
  flashcard // Destructure the flashcard object
}) => {
  const { id, cloze_text, source_highlight, source_url } = flashcard; // Extract needed fields

  // Basic validation
  if (!cloze_text) {
    console.warn('FlashcardClozeMessage requires flashcard with cloze_text.');
    return null;
  }

  const displayContent = formatClozeDisplay(cloze_text);

  // Tooltip showing full text and maybe source
  let hoverTitle = `Flashcard (Cloze)\nText: ${cloze_text}`;
  if (source_highlight) hoverTitle += `\nHighlight: ${source_highlight}`;
  if (source_url) hoverTitle += `\nSource: ${source_url}`;

  return (
    // Add outer wrapper for alignment
    <div className="flex w-full my-2 justify-start">
      <div
        // Add max-w-[85%], keep existing padding and classes
        className="inline-flex items-center gap-2 my-1 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm self-start max-w-[85%]"
        key={`fc-msg-${id}`} 
        title={hoverTitle}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          {/* Using BracketsCurly icon, orange duotone */}
          <BracketsCurly size={24} weight="duotone" className="text-orange-500" />
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          {/* Display extracted cloze or placeholder */}
          <span className="text-gray-800">{displayContent}</span>
        </div>
      </div>
    </div>
    // Close outer wrapper
  );
}; 