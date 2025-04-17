import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { ArrowClockwise, Cards, BracketsCurly, Translate } from '@phosphor-icons/react';
import type { Flashcard } from '../../types/db';
import { cn } from '../../../lib/utils';

interface FlashcardCreatorPopupProps {
  selectedText: string;
  onSaveFlashcard: (flashcardData: Partial<Flashcard>) => void;
  onClose: () => void;
  onGenerate: (text: string) => void;
  generatedFlashcard: { front: string; back: string } | null;
  generatedCloze: { text: string } | null;
  isGenerating: boolean;
  status: string;
  statusIsError: boolean;

  onTranslateFlashcard: (text: string) => void;
  onTranslateCloze: (text: string) => void;
  translatedFlashcardBack: string | null;
  translatedClozeText: string | null;
  isTranslatingFlashcard: boolean;
  isTranslatingCloze: boolean;
}

export const FlashcardCreatorPopup: React.FC<FlashcardCreatorPopupProps> = ({
  selectedText,
  onSaveFlashcard,
  onClose,
  onGenerate,
  generatedFlashcard,
  generatedCloze,
  isGenerating: isParentGenerating,
  status,
  statusIsError,
  onTranslateFlashcard,
  onTranslateCloze,
  translatedFlashcardBack,
  translatedClozeText,
  isTranslatingFlashcard,
  isTranslatingCloze,
}) => {
  const [flashcardFront, setFlashcardFront] = useState('');
  const [flashcardBack, setFlashcardBack] = useState('');
  const [clozeText, setClozeText] = useState('');
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [loadingDots, setLoadingDots] = useState('.');
  const [flashcardRegenTrigger, setFlashcardRegenTrigger] = useState(0);
  const [clozeRegenTrigger, setClozeRegenTrigger] = useState(0);
  const [isRegeneratingFlashcard, setIsRegeneratingFlashcard] = useState(false);
  const [isRegeneratingCloze, setIsRegeneratingCloze] = useState(false);

  useEffect(() => {
    const generateInitialCards = async () => {
      setIsLoadingInitial(true);
      setFlashcardFront('');
      setFlashcardBack('');
      setClozeText('');

      console.log(`[Popup] Requesting INITIAL generation via onGenerate for:`, selectedText);
      try {
        await onGenerate(selectedText);
        console.log("[Popup] Initial generation request sent (promise resolved).");
      } catch (error) {
        console.error("[Popup] Error triggering initial generation via onGenerate:", error);
      }
    };

    generateInitialCards();
  }, [selectedText, onGenerate]);

  useEffect(() => {
    console.log("[Popup] generatedFlashcard prop changed:", generatedFlashcard);
    setIsRegeneratingFlashcard(false);
    if (generatedFlashcard) {
      setFlashcardFront(generatedFlashcard.front);
      setFlashcardBack(generatedFlashcard.back);
      setIsLoadingInitial(false);
    }
  }, [generatedFlashcard]);

  useEffect(() => {
    console.log("[Popup] generatedCloze prop changed:", generatedCloze);
    setIsRegeneratingCloze(false);
    if (generatedCloze) {
      setClozeText(generatedCloze.text);
      setIsLoadingInitial(false);
    }
  }, [generatedCloze]);

  useEffect(() => {
    if (flashcardRegenTrigger === 0) return;
    const regenerateFlashcard = async () => {
      setIsRegeneratingFlashcard(true);
      setFlashcardFront('');
      setFlashcardBack('');
      console.log(`[Popup] Triggering regeneration (Flashcard) via onGenerate`);
      try {
        await onGenerate(selectedText);
      } catch (error) {
        console.error("[Popup] Error triggering flashcard regen:", error);
      }
    };
    regenerateFlashcard();
  }, [flashcardRegenTrigger, selectedText, onGenerate]);

  useEffect(() => {
    if (clozeRegenTrigger === 0) return;
    const regenerateCloze = async () => {
      setIsRegeneratingCloze(true);
      setClozeText('');
      console.log(`[Popup] Triggering regeneration (Cloze) via onGenerate`);
      try {
        await onGenerate(selectedText);
      } catch (error) {
        console.error("[Popup] Error triggering cloze regen:", error);
      }
    };
    regenerateCloze();
  }, [clozeRegenTrigger, selectedText, onGenerate]);

  // Effect for dot animation based on loading/regeneration state
  useEffect(() => {
    let dotInterval: NodeJS.Timeout | null = null;
    // Animate if initially loading OR either section is regenerating
    if (isLoadingInitial || isRegeneratingFlashcard || isRegeneratingCloze) {
      setLoadingDots('.'); // Reset dots when animation starts
      dotInterval = setInterval(() => {
        setLoadingDots(prev => (prev === '...' ? '.' : prev + '.'));
      }, 400);
    }
    // Cleanup function for this effect
    return () => { if (dotInterval) clearInterval(dotInterval); };
  }, [isLoadingInitial, isRegeneratingFlashcard, isRegeneratingCloze]); // Depend on all loading/regen states

  const handleSave = () => {
    const backContentToSave = translatedFlashcardBack ?? flashcardBack;
    const clozeContentToSave = translatedClozeText ?? clozeText;
    
    if (!flashcardFront && !clozeContentToSave) {
        console.warn('[Popup] Cannot save, missing front/cloze content.');
        return;
    }

    let flashcardData: Partial<Flashcard> = {
      source_highlight: selectedText,
      type: clozeContentToSave ? 'cloze' : 'front_back',
      front: flashcardFront || undefined,
      back: backContentToSave || undefined,
      cloze_text: clozeContentToSave || undefined,
      target_language: translatedFlashcardBack || translatedClozeText ? 'zh-CN' : undefined,
      source_url: undefined,
      context: undefined,
      tags: undefined
    };

    onSaveFlashcard(flashcardData);
  };

  const loadingPlaceholder = `Generating${loadingDots}`;
  const isBusy = isLoadingInitial || isRegeneratingFlashcard || isRegeneratingCloze || isTranslatingFlashcard || isTranslatingCloze;
  const isFlashcardBusy = isRegeneratingFlashcard || isTranslatingFlashcard;
  const isClozeBusy = isRegeneratingCloze || isTranslatingCloze;
  const canSave = !isBusy && (flashcardFront || clozeText);

  // Debug log before render
  console.log('[Popup Render Debug]', {
    isLoadingInitial,
    isRegeneratingFlashcard,
    isRegeneratingCloze,
    flashcardFront,
    clozeText,
    loadingPlaceholder
  });

  return (
    <div className="max-w-xl h-[540px] p-4 bg-background text-foreground border border-border rounded-lg shadow-md flex flex-col gap-3">
      <div className="flex-grow overflow-y-auto pr-2 flex flex-col gap-3">

        {/* Removed Temporary Debug Info */}
        {/* {isRegeneratingFlashcard && <p className="text-xs text-red-500">DEBUG: isRegenFlash=true, placeholder={loadingPlaceholder}</p>} */}
        {/* {isRegeneratingCloze && <p className="text-xs text-red-500">DEBUG: isRegenCloze=true, placeholder={loadingPlaceholder}</p>} */}

        <fieldset className="flex flex-col gap-3">
          <div className="flex justify-between items-center min-h-[36px]">
            <legend className="text-lg font-semibold px-1 flex items-center gap-2">
              <Cards size={20} weight="duotone" className="text-orange-500" />
              Flashcard
            </legend>
            <div className="flex items-center gap-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={() => flashcardBack && onTranslateFlashcard(flashcardBack)}
                    disabled={isFlashcardBusy || !flashcardBack}
                    title="Translate Back (to Chinese)"
                >
                    {isTranslatingFlashcard ? <ArrowClockwise size={14} className="animate-spin" /> : <Translate size={14} />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={() => setFlashcardRegenTrigger(p => p + 1)}
                    disabled={isBusy || !selectedText}
                    title="Regenerate Flashcard"
                >
                    <ArrowClockwise size={14} className={isRegeneratingFlashcard ? "animate-spin" : ""} />
                </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="flashcard-front">Front</Label>
            <Textarea id="flashcard-front" className="mt-1" value={flashcardFront} onChange={(e) => setFlashcardFront(e.target.value)} placeholder={isLoadingInitial || isRegeneratingFlashcard ? loadingPlaceholder : "Topic/Concept..."} rows={1} disabled={isFlashcardBusy} />
          </div>
           <div>
            <Label htmlFor="flashcard-back">Back</Label>
            <Textarea id="flashcard-back" className="mt-1" value={translatedFlashcardBack ?? flashcardBack} onChange={(e) => setFlashcardBack(e.target.value)} placeholder={isLoadingInitial || isRegeneratingFlashcard ? loadingPlaceholder : "Fact/Definition..."} disabled={isFlashcardBusy} />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <div className="flex justify-between items-center min-h-[36px]">
            <legend className="text-lg font-semibold px-1 flex items-center gap-2">
              <BracketsCurly size={20} weight="duotone" className="text-orange-500" />
              Cloze
            </legend>
             <div className="flex items-center gap-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={() => clozeText && onTranslateCloze(clozeText)}
                    disabled={isClozeBusy || !clozeText}
                    title="Translate Cloze Answer (to Chinese)"
                >
                    {isTranslatingCloze ? <ArrowClockwise size={14} className="animate-spin" /> : <Translate size={14} />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={() => setClozeRegenTrigger(p => p + 1)}
                    disabled={isBusy || !selectedText}
                    title="Regenerate Cloze"
                >
                    <ArrowClockwise size={14} className={isRegeneratingCloze ? "animate-spin" : ""} />
                </Button>
             </div>
          </div>
          <div className="space-y-1">
            <Textarea
              id="cloze-text"
              value={translatedClozeText ?? clozeText}
              onChange={(e) => setClozeText(e.target.value)}
              placeholder={isLoadingInitial || isRegeneratingCloze ? loadingPlaceholder : "Sentence with {{c1::cloze}}..."}
              rows={5}
              disabled={isClozeBusy}
            />
          </div>
        </fieldset>
      </div>

      <div className="flex items-center mt-auto shrink-0 pt-2 gap-2">
            <Button
                size="sm"
                onClick={handleSave}
                disabled={!canSave}
                className="w-full"
            >
                Save
            </Button>
        </div>
    </div>
  );
}; 