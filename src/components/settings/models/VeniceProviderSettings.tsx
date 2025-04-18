import React from 'react';
import { cn } from '../../../../lib/utils'; // Adjust path if needed
import { Button } from '../../ui/button';
import { Ghost } from '@phosphor-icons/react';

interface VeniceProviderSettingsProps {
  // Props might include connection status, user info, etc. later
  className?: string;
}

export function VeniceProviderSettings({ className }: VeniceProviderSettingsProps) {

  // Placeholder - add actual connection logic, TTS settings etc. later

  return (
    <div className={cn("p-6 space-y-6 flex flex-col items-center justify-center text-center min-h-[300px]", className)}>
      <Ghost size={48} weight="duotone" className="text-primary mb-4" />
      <h3 className="text-xl font-semibold">Venice AI Configuration</h3>
      <p className="text-muted-foreground max-w-md">
        Connect your wallet to access private, uncensored models and TTS features.
      </p>
      <div className="pt-4">
        <Button variant="outline" disabled>
          Connect Wallet (Coming Soon)
        </Button>
      </div>
       {/* Add placeholders for TTS settings etc. here */}
    </div>
  );
} 