import React, { useState } from 'react';
import { Cards } from '@phosphor-icons/react';
import { Button } from '../ui/button'; // Assuming Button component exists

export interface FlashcardFrontBackProps {
  /** Text for the front of the card */
  frontText: string;
  /** Text for the back of the card */
  backText: string;
  /** Optional unique key for lists */
  id?: string | number;
}

export const FlashcardFrontBack: React.FC<FlashcardFrontBackProps> = ({
  frontText,
  backText,
  id,
}) => {
  const [isBackRevealed, setIsBackRevealed] = useState(false);

  // Basic validation
  if (!frontText || !backText) {
    console.warn('FlashcardFrontBack requires both frontText and backText.');
    return null;
  }

  return (
    <div
      className="inline-block mx-auto my-1 p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm text-sm"
      key={id}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <Cards size={24} weight="duotone" className="text-orange-500" />
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          {/* Front */}
          <div className="mb-2">
            <p className="text-xs font-medium text-gray-600 mb-1">Front:</p>
            <p className="text-gray-800 whitespace-pre-wrap break-words">
              {frontText}
            </p>
          </div>

          {/* Back (Conditional) */}
          {isBackRevealed && (
            <div className="mt-3 pt-3 border-t border-yellow-100">
              <p className="text-xs font-medium text-gray-600 mb-1">Back:</p>
              <p className="text-gray-800 whitespace-pre-wrap break-words">
                {backText}
              </p>
            </div>
          )}

          {/* Reveal Button */}
          {!isBackRevealed && (
            <div className="mt-3 pt-3 border-t border-yellow-100 text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBackRevealed(true)}
                className="text-xs"
              >
                Show Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 