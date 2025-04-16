import React from 'react';
import { Button } from '../ui/button'; // Assuming Button is here
import { Textarea } from '../ui/textarea'; // Import the Textarea
import { CircleNotch } from '@phosphor-icons/react'; // Corrected import for phosphor icons

interface PopupDisplayProps {
  pageTitle?: string; // Add pageTitle prop
  pageUrl?: string; // Add pageUrl prop
  status: string;
  isClipping: boolean;
  canClip: boolean; // Replaces the logic checking pageInfo
  onClip: () => void;
  clipButtonText?: string; // Optional override for button text
  statusIsError?: boolean; // To easily style error messages
  // Props for tags textarea
  tagsValue?: string;
  onTagsChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// This is a purely presentational component for the clipper popup UI.
// It receives all state and callbacks via props.
function PopupDisplay({ 
  pageTitle,
  pageUrl, // Add pageUrl
  status,
  isClipping,
  canClip,
  onClip,
  clipButtonText = 'Clip Current Page',
  statusIsError = false,
  tagsValue = '',
  onTagsChange = () => {}
}: PopupDisplayProps) {

  const buttonContent = isClipping 
    ? <><CircleNotch size={16} className="mr-2 h-4 w-4 animate-spin" /> Saving...</> 
    : clipButtonText;

  return (
    <div className="p-4 w-80 flex flex-col gap-3 bg-background text-foreground border border-border rounded-lg shadow-md">
      {/* Title Section */}
      {pageTitle && (
        <div className="flex items-start gap-2 text-base">
          <span className="font-medium w-16 shrink-0">Title:</span>
          <span className="truncate flex-1" title={pageTitle}>{pageTitle}</span>
        </div>
      )}
      
      {/* Source Section */}
      {pageUrl && (
        <div className="flex items-start gap-2 text-base">
          <span className="font-medium w-16 shrink-0">Source:</span>
          <span className="truncate flex-1 text-muted-foreground" title={pageUrl}>{pageUrl}</span> 
        </div>
      )}

      {/* Tags Section */}
      <div className="flex items-center gap-2 text-base">
        <label htmlFor="tags-textarea" className="font-medium w-16 shrink-0">Tags:</label>
        <Textarea 
          id="tags-textarea"
          placeholder="" 
          value={tagsValue} 
          onChange={onTagsChange}
          className="resize-none flex-1 min-h-[40px]"
          rows={1}
        />
      </div>

      {/* Action Button */}
      <Button 
        onClick={onClip} 
        disabled={!canClip || isClipping} 
        variant="default" 
        size="default"
        className="w-full mt-2"
      >
        {buttonContent}
      </Button>

      {/* Status Message */}
      {status && !isClipping && (
        <div 
          className={`text-xs text-center mt-1 ${statusIsError ? 'text-destructive' : 'text-muted-foreground'}`}
        >
          {status}
        </div>
      )}
    </div>
  );
}

export default PopupDisplay; 