import React from 'react';
import { BracketsCurly } from '@phosphor-icons/react';

export interface FlashcardClozeMessageProps {
  /** The full text including cloze syntax, e.g., "The capital of {{c1::France}} is Paris." */
  clozeText: string;
  /** Optional unique key for lists */
  id?: string | number;
}

const CLOZE_TEXT_MAX_CHARS = 60; // Allow slightly more for context

/** Truncates text if it exceeds a maximum length */
const truncateText = (text: string, maxLength: number): string => {
  if (!text) return '';
  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

/** Finds the first Anki cloze, and styles it within the text if the whole text fits */
const formatClozeDisplay = (text: string): React.ReactNode => {
  if (!text) return '[Empty Cloze Text]';

  // Regex to find the first *full* Anki cloze block {{c[number]::...}}
  const clozeRegex = /(.*?)({{c\d+::.*?}})(.*)/s;
  const match = text.match(clozeRegex);

  // Check if the *original* text length exceeds the limit first
  if (text.length > CLOZE_TEXT_MAX_CHARS) {
    return truncateText(text, CLOZE_TEXT_MAX_CHARS);
  }

  // If text fits AND a cloze is found, style the first cloze block
  if (match) {
    const beforeText = match[1];
    const clozeBlock = match[2]; // The full {{c1::answer::hint}}
    const afterText = match[3];

    return (
      <>
        {beforeText}
        <strong className="font-semibold">{clozeBlock}</strong>
        {afterText}
      </>
    );
  } else {
    // No cloze found, return original text (already checked for length)
    return text;
  }
};

export const FlashcardClozeMessage: React.FC<FlashcardClozeMessageProps> = ({
  clozeText,
  id,
}) => {
  // Basic validation
  if (!clozeText) {
    console.warn('FlashcardClozeMessage requires clozeText.');
    return null;
  }

  const displayContent = formatClozeDisplay(clozeText);

  // Tooltip showing full text
  const hoverTitle = `Flashcard (Cloze)\nText: ${clozeText}`;

  return (
    <div
      className="inline-flex items-center gap-2 mx-auto my-1 p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-sm"
      key={id}
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
  );
}; 