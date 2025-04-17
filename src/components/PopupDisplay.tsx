import React from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Gear } from '@phosphor-icons/react';
import { Label } from './ui/label';
import { cn } from '../../lib/utils';
import { CircleNotch, BookmarkSimple } from '@phosphor-icons/react';

interface PopupDisplayProps {
  pageTitle?: string;
  pageUrl?: string;
  status: string;
  isSaving: boolean;
  canClip: boolean;
  onSaveBookmark: () => void;
  saveButtonText: string;
  statusIsError: boolean;
  tagsValue: string;
  onTagsChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSettingsClick: () => void;
}

function PopupDisplay({ 
  pageTitle,
  pageUrl,
  status,
  isSaving,
  canClip,
  onSaveBookmark,
  saveButtonText = 'Save',
  statusIsError = false,
  tagsValue = '',
  onTagsChange = () => {},
  onSettingsClick = () => {}
}: PopupDisplayProps) {

  const buttonContent = isSaving 
    ? <CircleNotch size={16} className="h-4 w-4 animate-spin" />
    : saveButtonText;

  return (
    <div className="p-4 w-80 flex flex-col gap-3 bg-background text-foreground border border-border rounded-lg shadow-md">
      
      {canClip ? (
        <>
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

          {pageTitle && (
            <div className="flex items-center gap-2 text-base">
              <span className="font-medium w-16 shrink-0">Title:</span>
              <span className="truncate flex-1" title={pageTitle}>{pageTitle}</span>
            </div>
          )}
          
          {pageUrl && (
            <div className="flex items-center gap-2 text-base">
              <span className="font-medium w-16 shrink-0">Source:</span>
              <span className="truncate flex-1 text-muted-foreground" title={pageUrl}>{pageUrl}</span> 
            </div>
          )}

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

          <Button 
            onClick={onSaveBookmark} 
            disabled={!canClip || isSaving}
            variant="default" 
            size="default"
            className={`w-full mt-2 ${isSaving ? 'flex justify-center items-center' : ''}`}
          >
            {buttonContent}
          </Button>
        </>
      ) : null} 

      {status && !isSaving && (
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