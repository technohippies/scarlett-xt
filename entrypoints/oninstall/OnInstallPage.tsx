import React, { useState, useEffect, useCallback, useRef } from 'react';
import browser from 'webextension-polyfill';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../src/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '../../src/components/ui/toggle-group';
import { InputWithIcon } from '../../src/components/ui/input-with-icon';
import { Button } from '../../src/components/ui/button';
import { Key } from '@phosphor-icons/react';
import { cn } from '../../lib/utils';
// Import the hook and related types/configs
import { useProviderStatus, localProvidersConfig, LocalStatus } from '../../src/hooks/useProviderStatus'; 

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

function OnInstallPage() {
  const { t } = useTranslation();
  // Get status and providers list from the hook
  const { statuses: localProviderStatuses, providers } = useProviderStatus(); 
  
  const [selectedLocalProvider, setSelectedLocalProvider] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState('');
  // Auto-selection logic now lives here, watching the statuses from the hook
  const [autoSelected, setAutoSelected] = useState(false); 

  useEffect(() => {
    if (autoSelected || selectedLocalProvider) return; // Don't auto-select if already selected manually or automatically

    // Find the first provider that is connected
    const firstConnected = providers.find(p => localProviderStatuses[p.id] === 'connected');

    if (firstConnected) {
      console.log("Auto-selecting first connected provider:", firstConnected.id);
      setSelectedLocalProvider(firstConnected.id);
      setAutoSelected(true);
    }
  }, [localProviderStatuses, providers, autoSelected, selectedLocalProvider]); // Depend on statuses from hook

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

  const handleSaveConfiguration = async (provider: string) => {
    console.log(`Saving configuration for ${provider}...`);
    let configToSave: any = {};
    let isOnlineProvider = false;

    if (provider === 'openrouter') {
      if (!apiKey) {
        console.error("API Key is missing for OpenRouter");
        // TODO: Show error to user?
        return;
      }
      configToSave = { provider: 'openrouter', apiKey };
      isOnlineProvider = true;
    } else {
      // provider is the ID of the selected local provider
      if (!selectedLocalProvider) {
        console.error("No local provider selected");
        return;
      }
      // Find the config details for the selected provider
      const providerDetails = localProvidersConfig.find(p => p.id === selectedLocalProvider);
       if (!providerDetails) {
         console.error("Selected local provider details not found");
         return;
       }
      configToSave = { 
          provider: selectedLocalProvider, 
          endpoint: providerDetails.endpoint, 
          // We might want to save the specific checkPath too?
          checkPath: providerDetails.checkPath 
      };
    }

    console.log("Config to save:", configToSave);

    try {
      // TODO: Implement actual message sending to background/offscreen script
      // Example using browser.runtime.sendMessage
      // const response = await browser.runtime.sendMessage({
      //   type: "SAVE_PROVIDER_CONFIG",
      //   payload: configToSave
      // });

      // Placeholder for successful save
      const response = { success: true }; // Assume success for now
      console.log("Save response (placeholder):", response);

      if (response.success) {
        console.log("Configuration saved successfully. Navigating...");
        // Navigate to the model selection page
        window.location.href = browser.runtime.getURL("model-selection.html");
      } else {
        console.error("Failed to save configuration.");
        // TODO: Show error message to the user
      }
    } catch (error) {
      console.error("Error sending save message:", error);
      // TODO: Show error message to the user
    }
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
              {providers.map((provider) => {
                // Get status from hook state
                const status = localProviderStatuses[provider.id] ?? 'checking'; 
                const isDisabled = status !== 'connected';

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
              // Read status from hook state for the selected provider
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