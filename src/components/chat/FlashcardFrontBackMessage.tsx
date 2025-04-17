import React from 'react';
import { Cards } from '@phosphor-icons/react';
import type { Flashcard } from '../../types/db'; // Import the Flashcard type

export interface FlashcardFrontBackMessageProps {
  /** The full flashcard object */
  flashcard: Flashcard;
  // Remove individual props: frontText, backText, id
}

// Define character limits for display
const FRONT_TEXT_MAX_CHARS = 25;
const BACK_TEXT_MAX_CHARS = 20;

/** Truncates text if it exceeds a maximum length */
const truncateText = (text: string | null | undefined, maxLength: number): string => {
  if (!text) return ''; // Handle null/undefined/empty input
  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

export const FlashcardFrontBackMessage: React.FC<FlashcardFrontBackMessageProps> = ({
  flashcard // Destructure the flashcard object
}) => {
  const { id, front, back, source_highlight, source_url } = flashcard; // Extract needed fields

  // Basic validation
  if (!front && !back) {
    // Allow if at least one side has text
    console.warn('FlashcardFrontBackMessage requires flashcard with at least front or back text.');
    return null;
  }

  const displayFront = truncateText(front, FRONT_TEXT_MAX_CHARS);
  const displayBack = truncateText(back, BACK_TEXT_MAX_CHARS);

  // Tooltip showing full details
  let hoverTitle = `Flashcard (Front/Back)\nFront: ${front || '[Empty]'}\nBack: ${back || '[Empty]'}`;
  if (source_highlight) hoverTitle += `\nHighlight: ${source_highlight}`;
  if (source_url) hoverTitle += `\nSource: ${source_url}`;

  return (
    <div
      className="inline-flex items-center gap-2 mx-auto my-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-sm"
      key={`fb-msg-${id}`} // Use flashcard ID for key
      title={hoverTitle}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        {/* Using Cards icon, orange duotone */}
        <Cards size={24} weight="duotone" className="text-orange-500" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        {displayFront && <span className="text-gray-800">{displayFront}</span>}
        {displayFront && displayBack && <span className="text-gray-400 mx-1">|</span>}
        {displayBack && <span className="text-gray-500">{displayBack}</span>}
      </div>
    </div>
  );
}; 