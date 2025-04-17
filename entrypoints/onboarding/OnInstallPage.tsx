import React, { useState } from 'react';
import browser from 'webextension-polyfill';
import { Button } from '../../src/components/ui/button';
import { Input } from '../../src/components/ui/input';
import { Label } from '../../src/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../src/components/ui/tabs";
import { sendMessage } from '../../utils/messaging';
import type { LLMProvider } from '../../src/services/llmService'; // Import provider type

const avatarSrc = "/images/scarlett-handshake.png";

interface OnInstallPageProps {
  onSetupComplete: (config: any) => void; // Callback when setup is done
}

// Define the structure for saving config
// Needs to align with LLMUserConfig types in llmService.ts
interface ConfigToSave {
  provider: LLMProvider;
  endpoint?: string; // For ollama
  apiKey?: string;   // For openrouter, groq
  // We won't save chatModel/embeddingModel here, that happens in ModelSelectionPage
}

const OnInstallPage: React.FC<OnInstallPageProps> = ({ onSetupComplete }) => {
  const [selectedProvider, setSelectedProvider] = useState<LLMProvider>('ollama');
  const [ollamaEndpoint, setOllamaEndpoint] = useState('http://localhost:11434');
  const [openRouterApiKey, setOpenRouterApiKey] = useState('');
  const [groqApiKey, setGroqApiKey] = useState(''); // New state for Groq API key
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSaveConfiguration = async () => {
    setIsLoading(true);
    setError(null);

    let configToSave: ConfigToSave | null = null;

    switch (selectedProvider) {
      case 'ollama':
        if (!ollamaEndpoint) {
          setError('Ollama endpoint is required.');
          setIsLoading(false);
          return;
        }
        // Basic URL validation
        try {
          new URL(ollamaEndpoint);
        } catch (_){
          setError('Invalid Ollama endpoint URL.');
          setIsLoading(false);
          return;
        }
        configToSave = { provider: 'ollama', endpoint: ollamaEndpoint };
        break;

      case 'openrouter':
        if (!openRouterApiKey) {
          setError('OpenRouter API Key is required.');
          setIsLoading(false);
          return;
        }
        configToSave = { provider: 'openrouter', apiKey: openRouterApiKey };
        break;

      case 'groq': // Handle Groq case
        if (!groqApiKey) {
          setError('Groq API Key is required.');
          setIsLoading(false);
          return;
        }
        configToSave = { provider: 'groq', apiKey: groqApiKey };
        break;
      
      // case 'venice': // Placeholder - No config saving needed yet
      //   configToSave = { provider: 'venice' }; // Needs Venice provider type added
      //   break;

      default:
        setError(`Invalid provider selected: ${selectedProvider}`);
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
      // We just pass the partial config needed for model selection
      onSetupComplete(configToSave);

    } catch (err: any) {
      console.error('[OnInstallPage] Error saving configuration:', err);
      setError(err.message || 'An unknown error occurred while saving.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-8 max-w-xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src={avatarSrc}
          alt="Scarlett Wizard Avatar"
          className="w-48 h-48 mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-3">Welcome to Scarlett!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Let's get you set up. Choose your preferred LLM provider.
        </p>

        <Tabs 
          value={selectedProvider} 
          onValueChange={(value) => setSelectedProvider(value as LLMProvider)} 
          className="w-full mb-8"
        >
          <TabsList className="grid w-full grid-cols-4"> {/* Adjust grid columns */}
            <TabsTrigger value="ollama">Local (Ollama)</TabsTrigger>
            <TabsTrigger value="openrouter">OpenRouter</TabsTrigger>
            <TabsTrigger value="groq">Groq</TabsTrigger>
            <TabsTrigger value="venice" disabled>Venice (Soon)</TabsTrigger> {/* Placeholder */}
          </TabsList>

          {/* Ollama Content */}
          <TabsContent value="ollama" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Connect to a running Ollama instance on your local network.
            </p>
            <div className="space-y-1">
              <Label htmlFor="ollama-endpoint">Ollama Endpoint URL</Label>
              <Input
                id="ollama-endpoint"
                type="url" 
                placeholder="http://localhost:11434"
                value={ollamaEndpoint}
                onChange={(e) => setOllamaEndpoint(e.target.value)}
              />
            </div>
          </TabsContent>

          {/* OpenRouter Content */}
          <TabsContent value="openrouter" className="mt-4 space-y-4">
             <p className="text-sm text-muted-foreground">
              Use various models via OpenRouter. Requires an API key.
            </p>
            <div className="space-y-1">
              <Label htmlFor="openrouter-key">OpenRouter API Key</Label>
              <Input
                id="openrouter-key"
                type="password"
                placeholder="sk-or-v1-..."
                value={openRouterApiKey}
                onChange={(e) => setOpenRouterApiKey(e.target.value)}
              />
            </div>
          </TabsContent>

          {/* Groq Content */}
          <TabsContent value="groq" className="mt-4 space-y-4">
             <p className="text-sm text-muted-foreground">
              Use high-speed LPU inference via Groq. Requires an API key.
            </p>
            <div className="space-y-1">
              <Label htmlFor="groq-key">Groq API Key</Label>
              <Input
                id="groq-key"
                type="password"
                placeholder="gsk_..."
                value={groqApiKey}
                onChange={(e) => setGroqApiKey(e.target.value)}
              />
            </div>
          </TabsContent>

          {/* Venice Placeholder Content */}
          <TabsContent value="venice" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Connect via Venice coming soon!
            </p>
             <Button variant="outline" disabled className="w-full">Connect Crypto Wallet (Coming Soon)</Button>
          </TabsContent>

        </Tabs>

        {error && <p className="text-red-500 mb-4">Error: {error}</p>}

        <Button 
            size="lg" 
            onClick={handleSaveConfiguration} 
            disabled={isLoading || selectedProvider === 'venice'} // Disable for Venice placeholder
            className="w-full"
        >
          {isLoading ? 'Saving...' : 'Continue to Model Selection'}
        </Button>
      </div>
    </div>
  );
};

export default OnInstallPage; 