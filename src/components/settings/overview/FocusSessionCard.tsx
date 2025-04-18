import { Timer, ArrowsClockwise } from '@phosphor-icons/react';
import { cn } from '../../../../lib/utils'; // Corrected relative path

export interface FocusSessionCardProps {
  totalMinutes: number;
  contextSwitches?: number;
  className?: string;
}

export function FocusSessionCard({ 
  totalMinutes,
  contextSwitches,
  className 
}: FocusSessionCardProps) {

  const formatMinutes = (minutes: number): string => {
    if (minutes < 60) {
        return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div 
      className={cn(
        'flex flex-col justify-center p-4 border rounded-lg bg-card text-card-foreground shadow-sm h-36', // Fixed height
        className
      )}
    >
      {/* Total Time */}
      <div className="flex items-center gap-2 mb-2">
        <Timer 
          size={24} 
          weight="duotone" 
          className="text-blue-500"
        />
        <span className="text-2xl font-semibold">
          {formatMinutes(totalMinutes)}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 ml-1">
        Total Focus Time
      </p>

      {/* Context Switches (Optional) */}
      {contextSwitches !== undefined && (
        <div className="flex items-center gap-2 border-t pt-2 mt-auto">
          <ArrowsClockwise 
            size={20} 
            weight="duotone" 
            className="text-purple-500"
          />
          <span className="text-lg font-medium">
            {contextSwitches}
          </span>
           <p className="text-xs text-muted-foreground ml-1">
            Context Switches
          </p>
        </div>
      )}
    </div>
  );
} 