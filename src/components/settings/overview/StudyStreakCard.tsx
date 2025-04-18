import { Fire } from '@phosphor-icons/react';
import { cn } from '../../../../lib/utils'; // Corrected relative path

export interface StudyStreakCardProps {
  streakCount: number;
  className?: string;
}

export function StudyStreakCard({ streakCount, className }: StudyStreakCardProps) {
  const hasStreak = streakCount > 0;

  return (
    <div 
      className={cn(
        'flex flex-col items-center justify-center p-4 border rounded-lg bg-card text-card-foreground shadow-sm h-36', // Fixed height
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <Fire 
          size={28} 
          weight="duotone" 
          className={cn(
            'transition-colors',
            hasStreak ? 'text-orange-500' : 'text-muted-foreground/50'
          )}
        />
        <span 
          className={cn(
            'text-4xl font-bold transition-colors',
            hasStreak ? 'text-foreground' : 'text-muted-foreground/50'
          )}
        >
          {streakCount}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        {hasStreak ? 'Day Streak' : 'No active streak'}
      </p>
    </div>
  );
} 