import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { cn } from '../../../../lib/utils'; // Adjust path if needed
import type { Model, UserConfig } from './types';

// TODO: Fetch models from OpenRouter API or maintain a more dynamic list
const openRouterModels: Model[] = [
  { id: "google/gemma-3-27b-it", name: "Google: Gemma 3 27B" },
  { id: "qwen/qwq-32b", name: "Qwen: QwQ 32B" },
  { id: "google/gemini-2-flash-experimental", name: "Google: Gemini 2.0 Flash Experimental" },
  { id: "google/gemini-2-flash-thinking-experimental", name: "Google: Gemini 2.0 Flash Thinking Experimental" },
  { id: "deepseek/deepseek-r1-zero", name: "DeepSeek: DeepSeek R1 Zero" },
  { id: "deepseek/deepseek-v3-base", name: "DeepSeek: DeepSeek V3 Base" },
  { id: "mistralai/mixtral-8x7b-instruct", name: "Mistral: Mixtral 8x7B Instruct"}, // Example added
  // Add more models as needed
];

interface OpenRouterProviderSettingsProps {
  activeConfig: UserConfig | null; // Config specific to OpenRouter
  onSave: (newConfig: Partial<UserConfig>) => Promise<void>;
  isLoading?: boolean;
  className?: string;
}

export function OpenRouterProviderSettings({ 
    activeConfig,
    onSave,
    isLoading: isSaving = false,
    className
}: OpenRouterProviderSettingsProps) {

  const [apiKey, setApiKey] = useState<string>('');
  const [selectedChatModel, setSelectedChatModel] = useState<string | null>(null);
  // Add state for other model types (coding, etc.) if needed later
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize state from config
  useEffect(() => {
    if (activeConfig) {
      setApiKey(activeConfig.apiKey || '');
      setSelectedChatModel(activeConfig.chatModel);
      setHasChanges(false);
    } else {
        // Reset if no active config for this provider
        setApiKey('');
        setSelectedChatModel(null);
        setHasChanges(false);
    }
  }, [activeConfig]);

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setApiKey(newValue);
    setHasChanges(newValue !== (activeConfig?.apiKey || '') || selectedChatModel !== (activeConfig?.chatModel ?? null));
  };

  const handleModelSelection = (value: string) => {
    setSelectedChatModel(value);
    setHasChanges(value !== (activeConfig?.chatModel ?? null) || apiKey !== (activeConfig?.apiKey || ''));
  };

  const handleSaveChanges = async () => {
    if (!hasChanges || isSaving || !activeConfig) return;
    
    const configToSave: Partial<UserConfig> = { 
        provider: 'openrouter', // Identify the provider
    };
    if (apiKey !== (activeConfig.apiKey || '')) {
        configToSave.apiKey = apiKey;
    }
    if (selectedChatModel !== activeConfig.chatModel) {
        configToSave.chatModel = selectedChatModel;
    }

    // Only save if actual changes occurred (besides provider ID)
    if (Object.keys(configToSave).length > 1) { 
        try {
            await onSave(configToSave);
            setHasChanges(false);
        } catch (error) {
            console.error("Failed to save OpenRouter settings:", error);
        }
    }
  };

  return (
    <div className={cn("p-6 space-y-6", className)}>
      <h3 className="text-xl font-semibold">OpenRouter Configuration</h3>

      {/* API Key Input */}
      <div className="space-y-1">
        <label htmlFor="openrouter-api-key" className="block text-sm font-medium">API Key</label>
        <Input 
          id="openrouter-api-key"
          type="password"
          placeholder="sk-or-v1..."
          value={apiKey}
          onChange={handleApiKeyChange}
        />
        <p className="text-xs text-muted-foreground">
          Enter your OpenRouter API key. You can find it in your 
          <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-primary">OpenRouter Account</a>.
        </p>
      </div>

      {/* Chat Model Selection */}
      <div className="space-y-1">
        <label htmlFor="openrouter-chat-model" className="block text-sm font-medium">Default Chat Model</label>
        <ModelSelect 
          id="openrouter-chat-model"
          models={openRouterModels} // Use hardcoded list for now
          selectedModel={selectedChatModel} 
          onSelect={handleModelSelection} 
          placeholder="Select chat model..."
        />
         <p className="text-xs text-muted-foreground">Primary model used for general chat interactions via OpenRouter.</p>
      </div>

       {/* Add more model selectors here if needed (e.g., Coding Model) */}

      {/* Save Button */}
      <div className="pt-4">
        <Button
          onClick={handleSaveChanges}
          disabled={!hasChanges || isSaving || !apiKey} // Also disable if API key is missing
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
        {!hasChanges && <p className="text-xs text-muted-foreground mt-2">No changes to save.</p>} 
      </div>
    </div>
  );
}

// Reusable ModelSelect component (consider moving to a shared location if used elsewhere)
interface ModelSelectProps {
  id: string;
  models: Model[];
  selectedModel: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ id, models, selectedModel, onSelect, placeholder }) => {
  return (
    <Select value={selectedModel ?? ''} onValueChange={onSelect}>
      <SelectTrigger id={id} className="w-full h-10 text-base">
        <SelectValue placeholder={placeholder ?? "Select a model..."} />
      </SelectTrigger>
      <SelectContent>
        {models.map((model) => (
          <SelectItem key={model.id} value={model.id}>
            {model.name || model.id}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}; 