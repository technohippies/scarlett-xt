import React from 'react';
import { TrendUp, TrendDown, ArrowRight } from '@phosphor-icons/react';
import { cn } from '../../../../lib/utils'; // Assuming relative path is correct now

// Simplified mood representation for trend calculation
type MoodValue = 1 | 2 | 3 | 4 | 5; // sad -> happy

export interface MoodEntry {
  date: string; // or Date
  value: MoodValue;
}

export interface MoodTrendCardProps {
  moodHistory: MoodEntry[]; // Expecting recent history, e.g., last 7 days
  className?: string;
}

// Simple trend calculation (can be improved)
function calculateTrend(history: MoodEntry[]): 'up' | 'down' | 'stable' | 'insufficient' {
  if (history.length < 2) return 'insufficient';
  // Compare average of first half vs second half (very basic)
  const half = Math.ceil(history.length / 2);
  const firstHalfAvg = history.slice(0, half).reduce((sum, entry) => sum + entry.value, 0) / half;
  const secondHalfAvg = history.slice(half).reduce((sum, entry) => sum + entry.value, 0) / (history.length - half);

  if (secondHalfAvg > firstHalfAvg + 0.2) return 'up'; // Threshold to avoid noise
  if (secondHalfAvg < firstHalfAvg - 0.2) return 'down';
  return 'stable';
}

const trendIcons = {
  up: { Icon: TrendUp, color: 'text-green-500', text: 'Trending Up' },
  down: { Icon: TrendDown, color: 'text-red-500', text: 'Trending Down' },
  stable: { Icon: ArrowRight, color: 'text-yellow-500', text: 'Stable' }, // Or use Minus icon
  insufficient: { Icon: ArrowRight, color: 'text-muted-foreground', text: 'Not Enough Data' },
};

export function MoodTrendCard({ moodHistory, className }: MoodTrendCardProps) {
  const trend = calculateTrend(moodHistory);
  const { Icon, color, text } = trendIcons[trend];

  return (
    <div 
      className={cn(
        'flex flex-col items-center justify-center p-4 border rounded-lg bg-card text-card-foreground shadow-sm h-36', // Fixed height
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon 
          size={28} 
          weight="duotone" 
          className={cn('transition-colors', color)}
        />
        {/* Removed Placeholder Chart */}
      </div>
      <p className="text-sm font-medium text-foreground mb-1">Mood Trend</p>
      <p className={cn("text-xs", color)}>{text}</p>
    </div>
  );
} 