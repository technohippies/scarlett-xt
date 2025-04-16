import React, { useState, useEffect, useCallback, useRef } from 'react';
import browser from 'webextension-polyfill';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../src/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '../../src/components/ui/toggle-group';
import { InputWithIcon } from '../../src/components/ui/input-with-icon';
import { Button } from '../../src/components/ui/button';
import { Key } from '@phosphor-icons/react';
import { cn } from '../../lib/utils';

// Simple hook for getting translations
// In a larger app, consider a dedicated context or library
const useTranslation = () => {
  const t = (key: string) => browser.i18n.getMessage(key);
  return { t };
};

// Simple Spinner Component
const Spinner = () => (
  <svg className="animate-spin h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// Define provider configurations
interface LocalProviderConfig {
  id: string;
  name: string;
  logo: string;
  endpoint: string;
  checkPath: string; // Path to check for status (e.g., /models, /version)
  checkMethod?: string; // Usually GET
}

const localProvidersConfig: LocalProviderConfig[] = [
  {
    id: 'ollama',
    name: 'Ollama',
    logo: '/images/ollama.png',
    endpoint: 'http://localhost:11434',
    checkPath: '/api/version' // Ollama has a specific version endpoint
  },
  {
    id: 'lmstudio',
    name: 'LMStudio',
    logo: '/images/lmstudio.png',
    endpoint: 'http://localhost:1234',
    checkPath: '/v1/models' // OpenAI compatible endpoint
  },
  {
    id: 'janai',
    name: 'Jan.ai',
    logo: '/images/jan.png',
    endpoint: 'http://127.0.0.1:1337',
    checkPath: '/v1/models' // OpenAI compatible endpoint
  },
];

type LocalStatus = 'checking' | 'connected' | 'error' | 'not-running';

function OnInstallPage() {
  const { t } = useTranslation();
  const [localProviderStatuses, setLocalProviderStatuses] = useState<Record<string, LocalStatus>>(
    Object.fromEntries(localProvidersConfig.map(p => [p.id, 'checking']))
  );
  const [selectedLocalProvider, setSelectedLocalProvider] = useState<string | null>(null);
  const [autoSelected, setAutoSelected] = useState(false); 
  const [apiKey, setApiKey] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store interval ID

  // Function to check a single provider's status
  const checkProviderStatus = useCallback(async (provider: LocalProviderConfig) => {
    // Don't re-check if already connected
    if (localProviderStatuses[provider.id] === 'connected') return;

    console.log(`Checking status for ${provider.name}...`);
    setLocalProviderStatuses(prev => ({ ...prev, [provider.id]: 'checking' }));

    try {
      const response = await fetch(`${provider.endpoint}${provider.checkPath}`, {
        method: provider.checkMethod || 'GET',
        signal: AbortSignal.timeout(3000) // Add a timeout to avoid hanging indefinitely
      });

      if (response.ok) {
        console.log(`${provider.name} detected!`);
        setLocalProviderStatuses(prev => ({ ...prev, [provider.id]: 'connected' }));
        // Auto-select if this is the first one detected
        if (!autoSelected && !selectedLocalProvider) {
           setSelectedLocalProvider(provider.id);
           setAutoSelected(true); 
           console.log("Auto-selected:", provider.id);
        }
      } else {
         console.log(`${provider.name} responded but not OK: ${response.status}`);
         setLocalProviderStatuses(prev => ({ ...prev, [provider.id]: 'error' }));
      }
    } catch (error) {
      console.log(`Error checking ${provider.name}:`, error);
      // Assume fetch failure means not running (could refine error checking)
      setLocalProviderStatuses(prev => ({ ...prev, [provider.id]: 'not-running' }));
    }
  }, [localProviderStatuses, autoSelected, selectedLocalProvider]); // Include dependencies

  // Effect for initial check and polling
  useEffect(() => {
    console.log("Running initial provider checks...");
    // Initial check for all providers
    localProvidersConfig.forEach(provider => checkProviderStatus(provider));

    // Clear previous interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up polling interval to re-check non-connected providers
    intervalRef.current = setInterval(() => {
      console.log("Polling providers...");
      localProvidersConfig.forEach(provider => {
        // Access the latest state using the functional update form is safer inside intervals,
        // but for simplicity here we rely on the state captured when interval was set up.
        // Re-check only if not currently connected.
        if (localProviderStatuses[provider.id] !== 'connected') {
            checkProviderStatus(provider);
        }
      });
    }, 5000); // Poll every 5 seconds

    // Cleanup function to clear interval on unmount
    return () => {
      if (intervalRef.current) {
        console.log("Clearing polling interval.");
        clearInterval(intervalRef.current);
      }
    };
  // IMPORTANT: Pass checkProviderStatus in dependency array
  }, [checkProviderStatus, localProviderStatuses]); // Re-run if checkProviderStatus changes (due to its own deps changing)

  const handleLocalProviderSelect = (value: string) => {
    if (value) { 
      console.log("Manually selected local provider:", value);
      setSelectedLocalProvider(value);
      setAutoSelected(true); 
    }
  };

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleSaveConfiguration = (provider: string) => {
    console.log(`Saving configuration for ${provider}...`);
    // TODO: Implement saving logic to PGLite DB
  };

  return (
    // Wrapper for vertical centering
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Main content container with increased padding */}
      <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src="/images/scarlett-handshake.png"
          alt="Scarlett Mascot Handshake"
          className="w-56 h-56 mb-6 object-contain" // Increased image size
        />
        <h1 className="text-3xl font-bold mb-3">{t('onInstall_title')}</h1> {/* Increased text size */}
        <p className="text-base text-muted-foreground mb-8">{t('onInstall_configurePrompt')}</p> {/* Increased text size */}

        <Tabs defaultValue="local" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="local">{t('onInstall_localTab')}</TabsTrigger>
            <TabsTrigger value="online">{t('onInstall_onlineTab')}</TabsTrigger>
          </TabsList>

          <TabsContent value="local" className="mt-6"> {/* Increased margin */}
            <ToggleGroup
              type="single"
              orientation="vertical"
              className="flex flex-col gap-3 w-full" 
              value={selectedLocalProvider || ''} 
              onValueChange={handleLocalProviderSelect} 
            >
              {localProvidersConfig.map((provider) => {
                const status = localProviderStatuses[provider.id] ?? 'checking';
                const isDisabled = status !== 'connected'; // Only enable if connected

                return (
                  <ToggleGroupItem
                    key={provider.id}
                    value={provider.id} 
                    aria-label={`Select ${provider.name}`}
                    disabled={isDisabled} 
                    className={cn(
                      "flex items-center justify-start w-full p-4 h-auto rounded-md border-2 border-transparent",
                      "bg-muted hover:bg-muted/90 text-foreground text-base",
                      "data-[state=on]:border-blue-500",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                      isDisabled && "opacity-60 cursor-not-allowed"
                    )}
                  >
                    <img src={provider.logo} alt={`${provider.name} logo`} className="w-10 h-10 rounded mr-4 shrink-0 object-contain" />
                    <span className="flex-grow text-left font-medium">{provider.name}</span>
                    <div className="flex items-center justify-center ml-auto pl-3 text-xs min-w-[80px] text-right"> 
                      {status === 'connected' && (
                        <>
                          <span className="text-green-500 mr-2">{t('onInstall_detectedStatus')}</span>
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0"></div>
                        </>
                      )}
                      {status === 'checking' && (
                         <Spinner />
                      )}
                      {status === 'not-running' && (
                        <span className="text-muted-foreground">Not Running</span> // Muted color for not running
                      )}
                      {status === 'error' && (
                        <span className="text-red-500">Error</span> // Keep error red
                      )}
                    </div>
                  </ToggleGroupItem>
                );
              })}
            </ToggleGroup>
            <Button
              size="lg"
              className="w-full mt-6"
              disabled={!selectedLocalProvider || localProviderStatuses[selectedLocalProvider] !== 'connected'}
              onClick={() => handleSaveConfiguration(selectedLocalProvider!)}
            >
              Connect 
            </Button>
          </TabsContent>

          <TabsContent value="online" className="mt-6"> {/* Increased margin */}
        
            <div className="space-y-3"> {/* Increased spacing */}
               <label htmlFor="api-key" className="text-base font-medium leading-none"> {/* Increased size */}
                 OpenRouter API Key
               </label>
              <InputWithIcon
                id="api-key"
                type="text" // Changed type to text
                icon={<Key size={18} />} // Increased icon size
                iconPosition="left"
                placeholder={t('onInstall_apiKeyPlaceholder')}
                value={apiKey}
                onChange={handleApiKeyChange}
                className="h-11 text-base" // Increased height and text size
              />
               <p className="text-sm text-muted-foreground"> {/* Increased size */}
                  Find your key on the <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="underline">OpenRouter Keys page</a>.
               </p>
            </div>
            <Button
              size="lg" // Use large button size
              className="w-full mt-6" // Increased margin
              disabled={!apiKey}
              onClick={() => handleSaveConfiguration('openrouter')}
            >
               Connect
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default OnInstallPage; 