import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

// Define mood types
export type Mood = 'happy' | 'slightly-happy' | 'neutral' | 'slightly-frowning' | 'sad';

interface MoodOption {
  mood: Mood;
  lottieSrc: string; // Path to the Lottie JSON file
  label: string; // For aria-label
}

// Define the Lottie JSON file paths relative to the public directory
const moodOptions: MoodOption[] = [
  { mood: 'happy', lottieSrc: '/lottie/happy.json', label: 'Happy' },
  { mood: 'slightly-happy', lottieSrc: '/lottie/slightly-happy.json', label: 'Slightly Happy' },
  { mood: 'neutral', lottieSrc: '/lottie/neutral.json', label: 'Neutral' },
  { mood: 'slightly-frowning', lottieSrc: '/lottie/slightly-frowning.json', label: 'Slightly Frowning' },
  { mood: 'sad', lottieSrc: '/lottie/sad.json', label: 'Sad' },
];

interface MoodSelectorProps {
  initialMood?: Mood | null;
  onSelect: (mood: Mood | null) => void;
  disabled?: boolean;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  initialMood = null,
  onSelect,
  disabled = false,
}) => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(initialMood);
  const [lottieData, setLottieData] = useState<Record<Mood, any>>({} as Record<Mood, any>);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Preload Lottie JSON data
  useEffect(() => {
    const loadLottieFiles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const loadedData: Partial<Record<Mood, any>> = {};
        for (const option of moodOptions) {
          const response = await fetch(option.lottieSrc);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${option.lottieSrc}: ${response.statusText}`);
          }
          const jsonData = await response.json();
          loadedData[option.mood] = jsonData;
        }
        setLottieData(loadedData as Record<Mood, any>);
      } catch (err: any) {
        console.error("Error loading Lottie files:", err);
        setError(err.message || 'Failed to load mood animations.');
      } finally {
        setIsLoading(false);
      }
    };

    loadLottieFiles();
  }, []); // Load once on mount

  const handleSelect = (mood: Mood) => {
    if (disabled || isLoading) return;
    const newMood = selectedMood === mood ? null : mood;
    setSelectedMood(newMood);
    onSelect(newMood);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center p-3 bg-gray-100 rounded-md h-[96px]">Loading moods...</div>;
  }

  if (error) {
     return <div className="flex items-center justify-center p-3 bg-red-100 text-red-700 rounded-md h-[96px]">Error: {error}</div>;
  }

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md"> {/* Container: Increased padding p-3 -> p-4 */}
      {moodOptions.map(({ mood, label }) => {
        const isSelected = selectedMood === mood;
        const animationData = lottieData[mood];

        if (!animationData) {
          // Adjust size for placeholder
          return <div key={mood} className="w-[80px] h-[80px] bg-gray-300 rounded-full animate-pulse"></div>;
        }

        return (
          <button
            key={mood}
            type="button"
            onClick={() => handleSelect(mood)}
            disabled={disabled || isLoading}
            aria-label={`Select ${label} Mood`}
            aria-pressed={isSelected}
            className={`
              p-2 rounded-full transition-transform duration-150 ease-in-out flex items-center justify-center
              hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${isSelected ? 'ring-2 ring-blue-600 ring-offset-1 bg-blue-100' : 'bg-gray-50'}
              ${(disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
            style={{ width: '80px', height: '80px' }}
          >
            <Lottie
              animationData={animationData}
              loop={isSelected}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </button>
        );
      })}
    </div>
  );
}; 