import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { ArrowClockwise, Check, Cards, BracketsCurly, Translate } from '@phosphor-icons/react';
import { Flashcard } from '../../types/db';
import { cn } from '../../../lib/utils';

interface FlashcardCreatorPopupProps {
  selectedText: string;
  onSaveFlashcard: (flashcardData: Partial<Flashcard>) => void;
  onClose: () => void;
  onGenerate: (text: string) => Promise<{
    flashcard: { front: string; back: string };
    cloze: { text: string };
  } | null>;
}

export const FlashcardCreatorPopup: React.FC<FlashcardCreatorPopupProps> = ({
  selectedText,
  onSaveFlashcard,
  onClose,
  onGenerate,
}) => {
  const [flashcardFront, setFlashcardFront] = useState('');
  const [flashcardBack, setFlashcardBack] = useState('');
  const [clozeText, setClozeText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');
  const [translatedFlashcardBack, setTranslatedFlashcardBack] = useState<string | null>(null);
  const [translatedClozeText, setTranslatedClozeText] = useState<string | null>(null);
  const [isTranslatingFlashcard, setIsTranslatingFlashcard] = useState(false);
  const [isTranslatingCloze, setIsTranslatingCloze] = useState(false);
  const [flashcardRegenTrigger, setFlashcardRegenTrigger] = useState(0);
  const [clozeRegenTrigger, setClozeRegenTrigger] = useState(0);
  const [isGeneratingFlashcard, setIsGeneratingFlashcard] = useState(true);
  const [isGeneratingCloze, setIsGeneratingCloze] = useState(true);

  useEffect(() => {
    let dotInterval: NodeJS.Timeout | null = null;
    const initialTrigger = flashcardRegenTrigger === 0 && clozeRegenTrigger === 0;

    if (!initialTrigger) return;

    const generateInitialCards = async () => {
        setFlashcardFront(''); setFlashcardBack(''); setClozeText('');
        setTranslatedFlashcardBack(null); setTranslatedClozeText(null);
        setIsGenerated(false);
        setIsGeneratingFlashcard(true);
        setIsGeneratingCloze(true);

        if (!selectedText) {
            setIsLoading(false);
            setIsGeneratingFlashcard(false);
            setIsGeneratingCloze(false);
            return;
        }

        setIsLoading(true);
        setLoadingDots('.');
        dotInterval = setInterval(() => { setLoadingDots(prev => prev === '...' ? '.' : prev + '.'); }, 400);

        console.log(`[Popup] Requesting INITIAL LLM generation for:`, selectedText);
        
        try {
            const result = await onGenerate(selectedText);
            console.log("[Popup] Received INITIAL generation result:", result);
            if (result) {
                setFlashcardFront(result.flashcard?.front || '');
                setFlashcardBack(result.flashcard?.back || '');
                setClozeText(result.cloze?.text || '');
            } else {
                console.error("[Popup] Initial LLM Generation failed or returned null.");
            }
        } catch (error) {
            console.error("[Popup] Error during initial LLM generation call:", error);
        } finally {
             console.log(`[Popup] Initial LLM generation process complete.`);
             setIsLoading(false);
             setIsGenerated(true);
             setIsGeneratingFlashcard(false);
             setIsGeneratingCloze(false);
             if (dotInterval) clearInterval(dotInterval);
        }
    };

    generateInitialCards();
    return () => { if (dotInterval) clearInterval(dotInterval); };

  }, [selectedText, onGenerate]);

  useEffect(() => {
    if (flashcardRegenTrigger === 0) return;

    const regenerateFlashcard = async () => {
        setIsGeneratingFlashcard(true);
        setTranslatedFlashcardBack(null);
        console.log(`[Popup] Regenerating Flashcard (Trigger: ${flashcardRegenTrigger})`);
        try {
            const result = await onGenerate(selectedText);
            if (result?.flashcard) {
                setFlashcardFront(result.flashcard.front || '');
                setFlashcardBack(result.flashcard.back || '');
            } else {
                 console.warn("[Popup] Flashcard regeneration failed or missing in result.");
                 setFlashcardFront('Failed'); setFlashcardBack('Failed');
            }
        } catch (error) {
             console.error("[Popup] Error regenerating Flashcard:", error);
             setFlashcardFront('Error'); setFlashcardBack('Error');
        } finally {
            setIsGeneratingFlashcard(false);
        }
    };
    regenerateFlashcard();
  }, [flashcardRegenTrigger, selectedText, onGenerate]);

  useEffect(() => {
    if (clozeRegenTrigger === 0) return;

    const regenerateCloze = async () => {
        setIsGeneratingCloze(true);
        setTranslatedClozeText(null);
        console.log(`[Popup] Regenerating Cloze (Trigger: ${clozeRegenTrigger}`);
        try {
            const result = await onGenerate(selectedText);
            if (result?.cloze) {
                setClozeText(result.cloze.text || '');
            } else {
                console.warn("[Popup] Cloze regeneration failed or missing in result.");
                setClozeText('Failed to regenerate cloze.');
            }
        } catch (error) {
             console.error("[Popup] Error regenerating Cloze:", error);
             setClozeText('Error regenerating cloze.');
        } finally {
            setIsGeneratingCloze(false);
        }
    };
    regenerateCloze();
  }, [clozeRegenTrigger, selectedText, onGenerate]);

  const handleTranslate = useCallback(async (type: 'flashcard' | 'cloze') => {
    if (!isGenerated || isLoading || isGeneratingFlashcard || isGeneratingCloze) return;

    if (type === 'flashcard') {
        if (!flashcardBack || isTranslatingFlashcard) return;
        setIsTranslatingFlashcard(true);
        setTranslatedFlashcardBack('Translating...');
        console.log('[Popup] Translating Flashcard Back:', flashcardBack);
        try {
            const translated = await sendMessage('translateText', {
                text: flashcardBack,
                targetLanguage: 'Mandarin Chinese'
            });

            if (typeof translated === 'string' && translated) {
                setTranslatedFlashcardBack(translated);
            } else {
                console.error('[Popup] Translation failed or returned invalid response:', translated);
                setTranslatedFlashcardBack('[Translation Error]');
            }
        } catch (error) {
            console.error('[Popup] Error sending translation message:', error);
            setTranslatedFlashcardBack('[Translation Error]');
        } finally {
            setIsTranslatingFlashcard(false);
        }
    } else {
        if (!clozeText || isTranslatingCloze) return;
        setIsTranslatingCloze(true);
        setTranslatedClozeText('Translating...');
        console.log('[Popup] Translating Cloze Answer (Simulation - Full text translation not implemented yet):', clozeText);

        await new Promise(resolve => setTimeout(resolve, 800));
        const match = clozeText.match(/\{\{c1::(.*?)\}\}/);
        let finalCloze = clozeText;
        if (match && match[1]) {
            const originalAnswer = match[1];
            if (!originalAnswer.startsWith('[Translated]')) {
                const translatedAnswer = `[Simulated Translation] ${originalAnswer}`;
                finalCloze = clozeText.replace(`{{c1::${originalAnswer}}}`, `{{c1::${translatedAnswer}}}`);
            }
        } else {
            console.warn("Could not extract cloze answer for translation simulation.");
            finalCloze = '[Translation Error]';
        }
        setTranslatedClozeText(finalCloze);
        setIsTranslatingCloze(false);
    }
  }, [isGenerated, isLoading, isGeneratingFlashcard, isGeneratingCloze, flashcardBack, clozeText, isTranslatingFlashcard, isTranslatingCloze]);

  const handleSave = () => {
    const backContentToSave = translatedFlashcardBack ?? flashcardBack;
    if (!isGenerated || !flashcardFront || !backContentToSave) {
        console.warn('[Popup] Cannot save, content not valid or not generated.');
        return;
    }
    let flashcardData: Partial<Flashcard> = {
      source_highlight: selectedText,
      type: 'qa',
      front: flashcardFront,
      back: backContentToSave,
    };
    if (translatedFlashcardBack) {
        flashcardData.target_language = 'xx';
    }
    onSaveFlashcard(flashcardData);
    onClose();
  };

  const handleRegenerateFlashcard = () => {
      if (isLoading || isGeneratingFlashcard || isGeneratingCloze || isTranslatingFlashcard || isTranslatingCloze) return;
      setFlashcardRegenTrigger(prev => prev + 1);
  };

  const handleRegenerateCloze = () => {
      if (isLoading || isGeneratingFlashcard || isGeneratingCloze || isTranslatingFlashcard || isTranslatingCloze) return;
      setClozeRegenTrigger(prev => prev + 1);
  };

  const canSave = isGenerated && flashcardFront && (translatedFlashcardBack || flashcardBack);
  const loadingPlaceholder = `Generating${loadingDots}`;
  const isBusy = isLoading || isGeneratingFlashcard || isGeneratingCloze || isTranslatingFlashcard || isTranslatingCloze;
  const isFlashcardBusy = isLoading || isGeneratingFlashcard || isTranslatingFlashcard;
  const isClozeBusy = isLoading || isGeneratingCloze || isTranslatingCloze;

  return (
    <div className="max-w-xl h-[500px] p-4 bg-background text-foreground border border-border rounded-lg shadow-md flex flex-col gap-3">
      <div className="flex-grow overflow-y-auto pr-2 flex flex-col gap-3">
        {/* Flashcard Section (formerly Q&A) */}
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
                    onClick={() => handleTranslate('flashcard')}
                    disabled={isFlashcardBusy || !flashcardBack}
                    title="Translate Back"
                >
                    {isTranslatingFlashcard ? <ArrowClockwise size={14} className="animate-spin" /> : <Translate size={14} />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={handleRegenerateFlashcard}
                    disabled={isBusy || !selectedText}
                    title="Regenerate Flashcard"
                >
                    <ArrowClockwise size={14} className={isGeneratingFlashcard ? "animate-spin" : ""} />
                </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="flashcard-front">Front</Label>
            <Textarea id="flashcard-front" className="mt-1" value={flashcardFront} onChange={(e) => setFlashcardFront(e.target.value)} placeholder={isGeneratingFlashcard ? loadingPlaceholder : "Topic/Concept..."} rows={1} disabled={isGeneratingFlashcard} />
          </div>
           <div>
            <Label htmlFor="flashcard-back">Back</Label>
            <Textarea id="flashcard-back" className="mt-1" value={translatedFlashcardBack ?? flashcardBack} onChange={(e) => setFlashcardBack(e.target.value)} placeholder={isGeneratingFlashcard ? loadingPlaceholder : "Fact/Definition..."} rows={1} disabled={isGeneratingFlashcard || isTranslatingFlashcard} />
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
                    onClick={() => handleTranslate('cloze')}
                    disabled={isClozeBusy || !clozeText}
                    title="Translate Cloze Answer"
                >
                    {isTranslatingCloze ? <ArrowClockwise size={14} className="animate-spin" /> : <Translate size={14} />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-7 w-7"
                    onClick={handleRegenerateCloze}
                    disabled={isBusy || !selectedText}
                    title="Regenerate Cloze"
                >
                    <ArrowClockwise size={14} className={isGeneratingCloze ? "animate-spin" : ""} />
                </Button>
             </div>
          </div>
          <div className="space-y-1">
            <Textarea
              id="cloze-text"
              value={translatedClozeText ?? clozeText}
              onChange={(e) => setClozeText(e.target.value)}
              placeholder={isGeneratingCloze ? loadingPlaceholder : "Sentence with {{c1::cloze}}..."}
              rows={5}
              disabled={isGeneratingCloze || isTranslatingCloze}
            />
          </div>
        </fieldset>
      </div>

      {/* Footer Actions (Save Only) - Remove top border */}
       <div className="flex items-center mt-auto shrink-0 pt-2 gap-2">
            {/* Save Button */}
            <Button
                size="sm"
                onClick={handleSave}
                disabled={isBusy || !canSave} 
                className="w-full" 
            >
                Save
            </Button>
        </div>
    </div>
  );
}; 