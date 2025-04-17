import React from 'react';

// Define specific props for the visual component
interface FlashcardProps {
  front?: string;
  back?: string;
}

// Basic placeholder Flashcard component
export const Flashcard: React.FC<FlashcardProps> = ({
  front,
  back,
}) => {
  console.log('[Flashcard] Received back prop:', back);
  // Removed unused props and langLabel logic

  return (
    // Reduced card size, kept larger text and padding
    <div className="dark border border-border rounded-lg p-8 w-96 h-[32rem] flex flex-col bg-card text-card-foreground shadow-lg">
      {/* Top section: Takes half the space, aligns text to bottom */}
      <div className="flex-1 flex flex-col justify-end pb-4">
        <div className="font-semibold text-2xl break-words">{front}</div>
      </div>
      
      {/* Divider: No shrink/grow */}
      <hr className="border-border flex-shrink-0" />
      
      {/* Bottom section: Takes half the space, aligns text to top */}
      <div className="flex-1 flex flex-col justify-start pt-4">
        <div className="font-medium text-xl break-words"> 
          {back}
        </div>
      </div>
    </div>
  );
};
