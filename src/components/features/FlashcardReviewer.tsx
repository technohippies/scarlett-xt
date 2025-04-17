import React, { useState } from 'react';
import { Flashcard } from '../ui/flashcard';
import { Button } from '../ui/button';
import { type Flashcard as FlashcardType } from '../../types/db'; // Corrected path

// Define props for the reviewer, likely including the card data
interface FlashcardReviewerProps {
  card: Pick<FlashcardType, 'front' | 'back'>; // Start with necessary display data
  // Add handlers for Again/Good later, e.g.:
  // onReview: (rating: 'again' | 'good') => void;
}

export const FlashcardReviewer: React.FC<FlashcardReviewerProps> = ({ card }) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  console.log('[Reviewer] Initial isAnswerShown:', isAnswerShown);

  const handleShowAnswer = () => {
    setIsAnswerShown(true);
  };

  const handleReview = (rating: 'again' | 'good') => {
    console.log(`Reviewed as: ${rating}`); // Placeholder action
    // Reset state for next card (or handle in parent)
    setIsAnswerShown(false);
    // Call prop handler, e.g., props.onReview(rating);
  };

  console.log('[Reviewer] Rendering with isAnswerShown:', isAnswerShown);
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[32rem]">
      {/* Flashcard Display */}
      <Flashcard 
        front={card.front} 
        back={isAnswerShown ? card.back : undefined} 
      />

      {/* Action Buttons Area */}
      <div className="w-full">
        {!isAnswerShown ? (
          // Show Answer Button (Full Width)
          <Button 
            variant="default" 
            className="w-full" 
            onClick={handleShowAnswer}
            size="lg"
          >
            Show Answer
          </Button>
        ) : (
          // Again / Good Buttons (Side-by-side)
          <div className="flex justify-center gap-[10%]">
            {/* Aiming for ~40% width each with a gap */}
            <Button 
              variant="ghost" // Changed from destructive
              className="w-[45%] text-destructive hover:bg-destructive/10 hover:text-destructive-foreground"
              onClick={() => handleReview('again')}
              size="lg"
            >
              Again
            </Button>
            <Button 
              variant="default" // Keep as primary blue
              className="w-[45%]"
              onClick={() => handleReview('good')}
              size="lg"
            >
              Good
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}; 