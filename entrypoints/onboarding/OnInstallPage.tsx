import React, { useState, useEffect } from 'react';
// import { Button } from '../../src/components/ui/button';
import { Button } from '../../src/components/ui/button';
import { Input } from '../../src/components/ui/input';
// import { Label } from '@radix-ui/react-label'; // No longer needed for local endpoint
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../src/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from '../../src/components/ui/toggle-group'; // Import ToggleGroup
import { useProviderStatus, type LocalProviderConfig } from '../../src/hooks/useProviderStatus'; // Removed unused localProvidersConfig
import type { LLMProvider } from '../../src/services/providers/types'; 
import { cn } from "../../lib/utils"; // Import cn for styling
// Import desired icons
import { ShieldPlus, Ghost, Key } from '@phosphor-icons/react';

// Simple Spinner Component (copied from story for use here)
const Spinner = () => (
  <svg className="animate-spin h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// StatusIndicator Component (adapted from story)
const StatusIndicator = ({ status }: { status: 'checking' | 'connected' | 'error' | 'not-running' }) => (
  <div className="flex items-center justify-center ml-auto pl-3 text-xs min-w-[80px] text-right">
    {status === 'connected' && (
      <>
        <span className="text-green-500 mr-2">Detected</span>
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0"></div>
      </>
    )}
    {status === 'checking' && (
      <>
        <span className="text-muted-foreground mr-2">Checking...</span>
        <Spinner />
      </>
    )}
     {status === 'not-running' && (<span className="text-muted-foreground/60">Not Running</span>)}
     {status === 'error' && (<span className="text-red-500">Error</span>)} 
  </div>
);

const avatarSrc = "/images/scarlett-handshake.png";

interface OnInstallPageProps {
  onSetupComplete: (config: any) => void; // Callback when setup is done
}

// Adjusted ConfigToSave - endpoint is now determined by selected local provider
interface ConfigToSave {
  provider: LLMProvider | LocalProviderConfig['id']; // Can be a standard provider or a local one
  endpoint?: string; 
  apiKey?: string;   
}

// Define the type for the primary provider selection (tabs)
type PrimaryProviderType = 'local' | 'venice' | 'openrouter'; // Reordered type

const OnInstallPage: React.FC<OnInstallPageProps> = ({ onSetupComplete }) => {
  const [selectedPrimaryProvider, setSelectedPrimaryProvider] = useState<PrimaryProviderType>('local');
  const [selectedLocalProviderId, setSelectedLocalProviderId] = useState<string | null>(null);
  // Remove ollamaEndpoint state - const [ollamaEndpoint, setOllamaEndpoint] = useState('http://localhost:11434');
  const [openRouterApiKey, setOpenRouterApiKey] = useState('');
  // Remove groqApiKey state - const [groqApiKey, setGroqApiKey] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use the provider status hook
  const { statuses, providers } = useProviderStatus();

  // Effect to automatically select the first connected local provider
  useEffect(() => {
    const firstConnected = providers.find(p => statuses[p.id] === 'connected');
    if (firstConnected && !selectedLocalProviderId) {
        console.log(`Auto-selecting detected provider: ${firstConnected.name}`);
        setSelectedLocalProviderId(firstConnected.id);
    }
    // Keep dependency array minimal - only run when statuses change significantly?
    // Using JSON.stringify might be too frequent. Maybe just run once?
    // Or depend on a derived value like `numberOfConnectedProviders`?
  }, [statuses, selectedLocalProviderId, providers]); // Re-run if statuses change or selection is cleared

  const handleSaveConfiguration = async () => {
    setIsLoading(true);
    setError(null);

    let configToSave: ConfigToSave | null = null;

    switch (selectedPrimaryProvider) {
      case 'local': // Handle the local provider selection
        if (!selectedLocalProviderId) {
          setError('Please select a detected local provider.');
          setIsLoading(false);
          return;
        }
        const selectedProviderConfig = providers.find(p => p.id === selectedLocalProviderId);
        if (!selectedProviderConfig || statuses[selectedLocalProviderId] !== 'connected') {
            setError('Selected provider is not connected or not found.');
            setIsLoading(false);
            return;
        }
        // Save the specific local provider ID and its endpoint
        configToSave = { 
            provider: selectedProviderConfig.id as LLMProvider, // Treat local IDs like ollama, lmstudio as providers
            endpoint: selectedProviderConfig.endpoint 
        };
        break;

      case 'openrouter':
        if (!openRouterApiKey) {
          setError('OpenRouter API Key is required.');
          setIsLoading(false);
          return;
        }
        configToSave = { provider: 'openrouter', apiKey: openRouterApiKey };
        break;

      // Removed groq case

      case 'venice': // Although disabled, handle theoretically
        setError('Venice provider is not yet available.');
        setIsLoading(false);
        return;

      default:
        setError(`Invalid provider selected: ${selectedPrimaryProvider}`);
        setIsLoading(false);
        return;
    }

    if (!configToSave) {
        setError("Failed to determine configuration to save.");
        setIsLoading(false);
        return;
    }

    try {
      console.log('[OnInstallPage] Saving configuration:', configToSave);
      onSetupComplete(configToSave);
    } catch (err: any) { 
      console.error('[OnInstallPage] Error processing configuration:', err);
      setError(err.message || 'An unknown error occurred while saving.');
    } finally {
      setIsLoading(false);
    }
  };

  // Helper component for description blocks
  const ProviderDescription = ({ provider }: { provider: PrimaryProviderType }) => {
      let icon: React.ReactNode = null;
      let text: React.ReactNode = null;

      switch (provider) {
          case 'local':
              icon = <ShieldPlus size={24} weight="duotone" className="text-blue-600 mr-3 shrink-0" />;
              text = (
                  <p>
                      <span className="font-semibold">Offline:</span> No data leaves your device.
                  </p>
              );
              break;
          case 'venice':
              icon = <Ghost size={24} weight="duotone" className="text-foreground mr-3 shrink-0" />;
              text = (
                  <p>
                     <span className="font-semibold">Uncensored & Private:</span> Crypto subscription with voice audio. 
                  </p>
              );
              break;
          case 'openrouter':
              icon = <Key size={24} weight="duotone" className="text-amber-500 mr-3 shrink-0" />;
              text = (
                  <p>
                      <span className="font-semibold">BYOK:</span> Pay OpenRouter with $ETH, not credit card, for privacy.
                  </p>
              );
              break;
      }

      return (
          <div className="mt-4 mb-6 flex items-center p-4 bg-muted/50 rounded-lg min-h-[60px]">
              {icon}
              <div className="text-sm text-muted-foreground">{text}</div>
          </div>
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src={avatarSrc}
          alt="Scarlett Offering Handshake"
          className="w-48 h-48 mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-3">Welcome to Scarlett!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Let's get you set up. Choose your preferred LLM provider.
        </p>

        <Tabs 
          value={selectedPrimaryProvider} 
          onValueChange={(value) => setSelectedPrimaryProvider(value as PrimaryProviderType)} 
          className="w-full"
        >
          {/* Reordered TabsList */}
          <TabsList className="grid w-full grid-cols-3"> 
            <TabsTrigger value="local">Local</TabsTrigger> 
            <TabsTrigger value="venice">Venice</TabsTrigger> 
            <TabsTrigger value="openrouter">OpenRouter</TabsTrigger>
          </TabsList>

          {/* Dynamic Description Area */} 
          <ProviderDescription provider={selectedPrimaryProvider} />

          {/* Local Providers Content - Removed static <p> */}
          <TabsContent value="local" className="space-y-4 min-h-[300px]"> 
            {/* <p> Removed static description </p> */}
            <ToggleGroup 
                type="single" 
                value={selectedLocalProviderId ?? undefined} 
                onValueChange={(value) => {
                    if (value) setSelectedLocalProviderId(value);
                }}
                className="flex-col gap-2 w-full" 
                orientation='vertical'
            >
                {providers.map((provider) => {
                    const status = statuses[provider.id];
                    const isConnected = status === 'connected';
                    const isDisabled = !isConnected; 

                    return (
                        <ToggleGroupItem
                            key={provider.id}
                            value={provider.id}
                            aria-label={`Select ${provider.name}`}
                            disabled={isDisabled} 
                            className={cn(
                                "flex items-center justify-start w-full p-4 h-auto rounded-md border-2 border-muted",
                                "bg-muted/50 hover:bg-muted/80 text-foreground text-base",
                                "data-[state=on]:border-primary data-[state=on]:bg-muted", 
                                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                isDisabled && "opacity-60 cursor-not-allowed"
                            )}
                            >
                            <img src={provider.logo} alt={`${provider.name} logo`} className="w-10 h-10 rounded mr-4 shrink-0 object-contain" />
                            <span className="flex-grow text-left font-medium">{provider.name}</span>
                            <StatusIndicator status={status} />
                        </ToggleGroupItem>
                    );
                })}
            </ToggleGroup>
             {providers.every(p => statuses[p.id] !== 'connected') && providers.every(p => statuses[p.id] !== 'checking') && (
                <p className="text-center text-muted-foreground pt-4">No local providers detected. Make sure Ollama, LMStudio, or Jan is running.</p>
             )}
          </TabsContent>

          {/* OpenRouter Content - Removed static <p> */}
          <TabsContent value="openrouter" className="space-y-4 min-h-[300px]">
            {/* <p> Removed static description </p> */}
             <div className="space-y-1 pt-2"> {/* Added slight padding top */} 
              <Input
                id="openrouter-key"
                type="password"
                placeholder="sk-or-v1..."
                value={openRouterApiKey}
                onChange={(e) => setOpenRouterApiKey(e.target.value)}
              />
            </div>
          </TabsContent>

          {/* Venice Placeholder Content - Updated */}
          <TabsContent value="venice" className="space-y-4 min-h-[300px]">
            {/* <p> Removed static description </p> */}
            <div className="flex flex-col items-center justify-center pt-6"> {/* Centering */} 
             <Button variant="outline" disabled className="w-full max-w-xs">Connect Wallet</Button>
             <p className="text-xs text-muted-foreground mt-2">Coming Soon</p> {/* Added text below button */} 
            </div>
          </TabsContent>

        </Tabs>

        {error && <p className="text-red-500 mb-4 text-center">Error: {error}</p>}

        <Button 
            size="lg" 
            onClick={handleSaveConfiguration} 
            disabled={isLoading || selectedPrimaryProvider === 'venice' || (selectedPrimaryProvider === 'local' && !selectedLocalProviderId) || (selectedPrimaryProvider === 'openrouter' && !openRouterApiKey)}
            className="w-full mt-4" // Added margin top
        >
          {isLoading ? 'Saving...' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default OnInstallPage; 