import React from 'react';
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

function OnInstallPage() {
  const { t } = useTranslation();

  // Placeholder state and handlers - will be implemented
  const [localProviderStatuses, setLocalProviderStatuses] = React.useState({ ollama: 'checking', lmstudio: 'checking', janai: 'checking' });
  const [selectedLocalModel, setSelectedLocalModel] = React.useState<string | null>(null);
  const [apiKey, setApiKey] = React.useState('');

  React.useEffect(() => {
    // TODO: Add logic here to:
    // 1. Check status of local providers (Ollama, LMStudio, Jan)
    // 2. Load existing configuration from DB if available
  }, []);

  const handleLocalModelSelect = (value: string) => {
    console.log("Selected local model:", value);
    setSelectedLocalModel(value);
    // TODO: Save selection temporarily?
  };

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleSaveConfiguration = (provider: string) => {
    console.log(`Saving configuration for ${provider}...`);
    // TODO: Implement saving logic to PGLite DB
    // For local: provider, selectedLocalModel
    // For online: provider ('openrouter'), apiKey
  };

  // Placeholder data - replace with actual detection logic
  const localProviders = [
    { id: 'ollama', name: 'Ollama', logo: '/images/ollama.png' },
    { id: 'lmstudio', name: 'LMStudio', logo: '/images/lmstudio.png' },
    { id: 'janai', name: 'Jan.ai', logo: '/images/jan.png' },
  ];

  return (
    <div className="container mx-auto p-6 max-w-2xl flex flex-col items-center">
      {/* Top Section */} 
      <img
        src="/images/scarlett-head.png" // TODO: Use correct image asset path if different
        alt="Scarlett Mascot Head"
        className="w-24 h-24 mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{t('onInstall_title')}</h1>
      <p className="text-muted-foreground mb-6">{t('onInstall_configurePrompt')}</p>

      {/* Tabs for Local/Online */} 
      <Tabs defaultValue="local" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="local">{t('onInstall_localTab')}</TabsTrigger>
          <TabsTrigger value="online">{t('onInstall_onlineTab')}</TabsTrigger>
        </TabsList>

        {/* Local Providers Tab */} 
        <TabsContent value="local" className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            Connect to an LLM running on your machine.
          </p>
          <ToggleGroup
            type="single"
            orientation="vertical"
            className="gap-2 w-full"
            value={selectedLocalModel || undefined} // Control selection state
            onValueChange={handleLocalModelSelect} // Handle selection change
          >
            {localProviders.map((provider) => (
              <ToggleGroupItem
                key={provider.id}
                value={provider.id} // Use provider id as the value
                aria-label={`Select ${provider.name}`}
                className={cn(
                  "flex items-center justify-start w-full p-3 h-auto rounded-md border-2 border-transparent",
                  "bg-muted hover:bg-muted/90 text-foreground",
                  "data-[state=on]:border-blue-500",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                )}
              >
                <img src={provider.logo} alt={`${provider.name} logo`} className="w-8 h-8 rounded mr-3 shrink-0 object-contain" />
                <span className="flex-grow text-left">{provider.name}</span>
                {/* Status Indicator Logic Here */}
                {/* <StatusIndicator status={localProviderStatuses[provider.id]} /> */}
                {/* Example placeholder: */}
                 <div className="flex items-center ml-auto pl-3">
                   {localProviderStatuses[provider.id as keyof typeof localProviderStatuses] === 'connected' && (
                     <>
                       <span className="text-green-500 text-xs mr-2">{t('onInstall_detectedStatus')}</span>
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     </>
                   )}
                   {/* Add other statuses later (checking, error) */}
                 </div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Button
            className="w-full mt-4"
            disabled={!selectedLocalModel} // Enable only when a model is selected
            onClick={() => handleSaveConfiguration(selectedLocalModel!)}
          >
            Next
          </Button>
        </TabsContent>

        {/* Online Providers Tab */} 
        <TabsContent value="online" className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            Connect to an online LLM provider (like OpenRouter).
          </p>
          <div className="space-y-2">
             <label htmlFor="api-key" className="text-sm font-medium leading-none">
               OpenRouter API Key
             </label>
            <InputWithIcon
              id="api-key"
              type="password"
              icon={<Key size={16} />} // Use Phosphor icon
              iconPosition="left"
              placeholder={t('onInstall_apiKeyPlaceholder')}
              value={apiKey}
              onChange={handleApiKeyChange}
            />
             <p className="text-xs text-muted-foreground">
                Find your key on the <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="underline">OpenRouter Keys page</a>.
             </p>
          </div>
          <Button
            className="w-full mt-4"
            disabled={!apiKey} // Enable only when API key is entered
            onClick={() => handleSaveConfiguration('openrouter')}
          >
             Connect
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnInstallPage; 