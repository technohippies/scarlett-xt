import React from 'react';
import { Cards } from '@phosphor-icons/react';

export interface FlashcardFrontBackMessageProps {
  /** Text for the front of the card */
  frontText: string;
  /** Text for the back of the card */
  backText: string;
  /** Optional unique key for lists */
  id?: string | number;
}

// Define character limits for display
const FRONT_TEXT_MAX_CHARS = 25;
const BACK_TEXT_MAX_CHARS = 20;

/** Truncates text if it exceeds a maximum length */
const truncateText = (text: string, maxLength: number): string => {
  if (!text) return ''; // Handle null/undefined/empty input
  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

export const FlashcardFrontBackMessage: React.FC<FlashcardFrontBackMessageProps> = ({
  frontText,
  backText,
  id,
}) => {
  // Basic validation
  if (!frontText && !backText) {
    // Allow if at least one side has text
    console.warn('FlashcardFrontBackMessage requires at least frontText or backText.');
    return null;
  }

  const displayFront = truncateText(frontText, FRONT_TEXT_MAX_CHARS);
  const displayBack = truncateText(backText, BACK_TEXT_MAX_CHARS);

  // Tooltip showing full details
  const hoverTitle = `Flashcard (Front/Back)\nFront: ${frontText || '[Empty]'}\nBack: ${backText || '[Empty]'}`;

  return (
    <div
      className="inline-flex items-center gap-2 mx-auto my-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-sm"
      key={id}
      title={hoverTitle}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        {/* Using Cards icon, orange duotone */}
        <Cards size={24} weight="duotone" className="text-orange-500" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        {/* Display Front | Back format */}
        <span className="text-gray-800">{displayFront || '[No Front]'}</span>
        {displayFront && displayBack && <span className="text-gray-400 mx-1">|</span>}
        {displayBack && <span className="text-gray-500">{displayBack}</span>}
        {!displayFront && displayBack && <span className="text-gray-500">[No Front] | {displayBack}</span>} {/* Handle only back */}
      </div>
    </div>
  );
}; 