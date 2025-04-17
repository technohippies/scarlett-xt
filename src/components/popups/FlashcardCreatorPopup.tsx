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
  // TODO: onGenerate prop for actual LLM call
}

export const FlashcardCreatorPopup: React.FC<FlashcardCreatorPopupProps> = ({
  selectedText,
  onSaveFlashcard,
  onClose,
}) => {
  const [qaFront, setQaFront] = useState('');
  const [qaBack, setQaBack] = useState('');
  const [clozeText, setClozeText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');

  // State for translation results and status
  const [translatedQaBack, setTranslatedQaBack] = useState<string | null>(null);
  const [translatedClozeText, setTranslatedClozeText] = useState<string | null>(null);
  const [isTranslatingQa, setIsTranslatingQa] = useState(false);
  const [isTranslatingCloze, setIsTranslatingCloze] = useState(false);

  // Automatic generation effect (simplified)
  useEffect(() => {
    let dotInterval: NodeJS.Timeout | null = null;

    const generateCards = async () => {
        if (!selectedText) {
            setQaFront(''); setQaBack(''); setClozeText('');
            setTranslatedQaBack(null); setTranslatedClozeText(null); // Reset translations
            setIsGenerated(false); setIsLoading(false);
            return;
        }
        setIsLoading(true); setIsGenerated(false);
        setTranslatedQaBack(null); setTranslatedClozeText(null); // Reset translations
        setLoadingDots('.');

        dotInterval = setInterval(() => {
            setLoadingDots(prev => prev === '...' ? '.' : prev + '.')
        }, 400);

        console.log(`[Popup] Auto-generating BASE cards for:`, selectedText);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Shorter simulation

        // Simulate BASE English Generation ONLY
        const baseQaFront = `What is the powerhouse of the cell?`;
        const baseQaBack = `The mitochondria.`;
        let baseCloze = '';
        const words = selectedText.split(' ');
        const nounIndex = words.findIndex(w => ['mitochondria', 'cell', 'supply', 'source', 'powerhouse'].includes(w.toLowerCase().replace(/[^a-z]/g, '')));
        let clozeAnswer = '[simulation failed]';
        if (nounIndex !== -1) {
            clozeAnswer = words[nounIndex];
            words[nounIndex] = `{{c1::${clozeAnswer}}}`;
            baseCloze = words.join(' ');
        } else {
            baseCloze = `${selectedText} {{c1::${clozeAnswer}}}`;
        }

        setQaFront(baseQaFront);
        setQaBack(baseQaBack);
        setClozeText(baseCloze);

        console.log(`[Popup] Base generation complete.`);
        setIsLoading(false); setIsGenerated(true);
        if (dotInterval) clearInterval(dotInterval);
    };

    generateCards();
    return () => { if (dotInterval) clearInterval(dotInterval); };

  }, [selectedText]); // Only depends on selectedText now

  // Handler for explicit translation action
  const handleTranslate = useCallback(async (type: 'qa' | 'cloze') => {
    if (!isGenerated || isLoading) return; // Don't translate if not generated or generating

    if (type === 'qa') {
        if (!qaBack || isTranslatingQa) return; // Don't translate empty or if already translating
        setIsTranslatingQa(true);
        console.log('[Popup] Translating Q&A Back:', qaBack);
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate translation API call
        setTranslatedQaBack(`[Translated] ${qaBack}`);
        setIsTranslatingQa(false);
    } else { // cloze
        if (!clozeText || isTranslatingCloze) return; // Don't translate empty or if already translating
        setIsTranslatingCloze(true);
        console.log('[Popup] Translating Cloze:', clozeText);
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate translation API call

        // Find the answer part and translate it
        const match = clozeText.match(/\{\{c1::(.*?)\}\}/);
        let finalCloze = clozeText;
        if (match && match[1]) {
            const originalAnswer = match[1];
            // Avoid re-translating already translated text
            if (!originalAnswer.startsWith('[Translated]')) {
                const translatedAnswer = `[Translated] ${originalAnswer}`;
                finalCloze = clozeText.replace(`{{c1::${originalAnswer}}}`, `{{c1::${translatedAnswer}}}`);
            }
        } else {
            console.warn("Could not extract cloze answer for translation simulation.");
        }
        setTranslatedClozeText(finalCloze);
        setIsTranslatingCloze(false);
    }
  }, [isGenerated, isLoading, qaBack, clozeText, isTranslatingQa, isTranslatingCloze]);

  // Updated handleSave (still only saves Q&A)
  const handleSave = () => {
    const backContentToSave = translatedQaBack ?? qaBack; // Use translated if available
    if (!isGenerated || !qaFront || !backContentToSave) {
        console.warn('[Popup] Cannot save, content not valid or not generated.');
        return;
    }

    let flashcardData: Partial<Flashcard> = {
      source_highlight: selectedText,
      type: 'qa',
      front: qaFront,
      back: backContentToSave, // Save potentially translated back
    };

    // Add target language only if Q&A translation was actually performed
    if (translatedQaBack) {
        flashcardData.target_language = 'xx'; // Placeholder
    }

    onSaveFlashcard(flashcardData);
    onClose();
  };

  const canSaveQa = isGenerated && qaFront && (translatedQaBack || qaBack); // Check if back (original or translated) exists
  const loadingPlaceholder = `Generating${loadingDots}`;

  return (
    <div className="max-w-md h-[550px] p-4 bg-background text-foreground border border-border rounded-lg shadow-md flex flex-col gap-4">
      {/* Content Area - Scrollable */}
      <div className="flex-grow overflow-y-auto pr-2 flex flex-col gap-4">
        {/* Q&A Section */}
        <fieldset className="flex flex-col gap-3">
          <div className="flex justify-between items-center min-h-[36px]"> {/* Ensure min height */}
            <legend className="text-lg font-semibold px-1 flex items-center gap-2">
              <Cards size={20} weight="duotone" className="text-orange-500" />
              Q&A
            </legend>
            {/* Translate Button for Q&A Back */}
            {isGenerated && ( // Show button only after generation
                 <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => handleTranslate('qa')}
                    disabled={isLoading || isTranslatingQa || !qaBack}
                    title="Translate Back"
                >
                    {isTranslatingQa ? <ArrowClockwise size={16} className="animate-spin" /> : <Translate size={16} />}
                </Button>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="qa-front">Front</Label>
            <Textarea id="qa-front" value={qaFront} onChange={(e) => setQaFront(e.target.value)} placeholder={isLoading ? loadingPlaceholder : "Question..."} rows={1} disabled={isLoading} />
          </div>
           <div className="space-y-1">
            <Label htmlFor="qa-back">Back</Label>
            {/* Display translated text if available */}
            <Textarea id="qa-back" value={translatedQaBack ?? qaBack} onChange={(e) => setQaBack(e.target.value)} placeholder={isLoading ? loadingPlaceholder : "Answer..."} rows={1} disabled={isLoading || isTranslatingQa} />
          </div>
        </fieldset>

        {/* Separator */}
        <hr className="border-border my-2" />

        {/* Fill in Blank Section */}
        <fieldset className="flex flex-col gap-3">
          <div className="flex justify-between items-center min-h-[36px]"> {/* Ensure min height */}
            <legend className="text-lg font-semibold px-1 flex items-center gap-2">
              <BracketsCurly size={20} weight="duotone" className="text-orange-500" />
              Fill in Blank
            </legend>
             {/* Translate Button for Cloze */}
             {isGenerated && ( // Show button only after generation
                <Button
                    variant="ghost"
                    size="icon"
                     className="text-muted-foreground hover:text-foreground"
                    onClick={() => handleTranslate('cloze')}
                    disabled={isLoading || isTranslatingCloze || !clozeText}
                    title="Translate Cloze Answer"
                >
                     {isTranslatingCloze ? <ArrowClockwise size={16} className="animate-spin" /> : <Translate size={16} />}
                </Button>
             )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="cloze-text">Cloze</Label>
             {/* Display translated text if available */}
            <Textarea
              id="cloze-text"
              value={translatedClozeText ?? clozeText}
              onChange={(e) => setClozeText(e.target.value)}
              placeholder={isLoading ? loadingPlaceholder : "Sentence with {{c1::cloze}}..."}
              rows={3}
              disabled={isLoading || isTranslatingCloze}
            />
          </div>
        </fieldset>
      </div>

      {/* Footer Actions */}
       <div className="flex flex-col items-center mt-auto shrink-0 pt-3 border-t border-border gap-2">
            <Button
                size="sm"
                onClick={handleSave}
                // Disable if initial generation is happening OR if translation is happening
                disabled={isLoading || isTranslatingQa || isTranslatingCloze || !canSaveQa}
                className="w-full"
            >
                Save
            </Button>
        </div>
    </div>
  );
}; 