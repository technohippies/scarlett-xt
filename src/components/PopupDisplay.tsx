import React from 'react';
import { Button } from './ui/button'; // Update import path
import { Textarea } from './ui/textarea'; // Update import path
import { CircleNotch, Gear, BookmarkSimple } from '@phosphor-icons/react'; // Add BookmarkSimple import

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
  onSettingsClick?: () => void; // Add prop for settings click
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
  clipButtonText = 'Save', // Changed default text
  statusIsError = false,
  tagsValue = '',
  onTagsChange = () => {},
  onSettingsClick = () => {} // Add default for settings click
}: PopupDisplayProps) {

  const buttonContent = isClipping 
    ? <CircleNotch size={16} className="h-4 w-4 animate-spin" /> // Just the spinner
    : clipButtonText;

  return (
    <div className="p-4 w-80 flex flex-col gap-3 bg-background text-foreground border border-border rounded-lg shadow-md">
      
      {/* Conditionally render the main content only if clipping is possible */} 
      {canClip ? (
        <>
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2"> 
            <div className="flex items-center gap-1 text-lg font-semibold"> 
              <BookmarkSimple size={20} weight="fill" className="text-primary" />
              <span>Bookmark</span>
            </div>
            {onSettingsClick && ( 
              <button 
                onClick={onSettingsClick}
                title="Open Settings"
                className="p-1 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-1 focus:ring-ring rounded"
              >
                <Gear size={20} />
              </button>
            )}
          </div>

          {/* Title Section */}
          {pageTitle && (
            <div className="flex items-center gap-2 text-base">
              <span className="font-medium w-16 shrink-0">Title:</span>
              <span className="truncate flex-1" title={pageTitle}>{pageTitle}</span>
            </div>
          )}
          
          {/* Source Section */}
          {pageUrl && (
            <div className="flex items-center gap-2 text-base">
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
            disabled={!canClip || isClipping} // This condition is technically redundant now, but harmless
            variant="default" 
            size="default"
            className={`w-full mt-2 ${isClipping ? 'flex justify-center items-center' : ''}`}
          >
            {buttonContent}
          </Button>
        </>
      ) : null} 
      {/* End of conditionally rendered block */} 

      {/* Status Message - Always shown, but centered and more prominent if !canClip */} 
      {status && !isClipping && (
        <div 
          className={`text-sm text-center mt-1 ${statusIsError ? 'text-destructive' : 'text-muted-foreground'} ${!canClip ? 'py-8' : ''}`}
        >
          {status}
        </div>
      )}
    </div>
  );
}

export default PopupDisplay; 