import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '../../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { cn } from '../../../../lib/utils'; // Adjust path if needed
import type { LocalProviderConfig } from '../../../hooks/useProviderStatus'; // Keep type import
import type { Model, UserConfig } from './types'; // Reverting to local types import

// Placeholder for HTML -> Markdown models
const defaultHtmlMarkdownModels: Model[] = [
    { id: 'default', name: 'Default Built-in' },
];

interface LocalProviderSettingsProps {
  activeConfig: UserConfig | null; // Config for the specific local provider being displayed
  onSave: (newConfig: Partial<UserConfig>) => Promise<void>; // Callback remains
  isLoading?: boolean; // For the save button state
  className?: string;
  // --- NEW PROPS --- 
  providers: LocalProviderConfig[]; // List of all detected local providers
  statuses: Record<string, 'checking' | 'connected' | 'error' | 'not-running'>; // Status for each provider
  availableModels: Model[]; // Models specifically for the activeConfig.provider
  modelsLoading: boolean;
  modelsError: string | null;
  // --- END NEW PROPS ---
}

// Helper: Find provider config by ID
const findProviderById = (id: string | null, providers: LocalProviderConfig[]): LocalProviderConfig | null => {
    if (!id) return null;
    return providers.find(p => p.id === id) || null;
};

export function LocalProviderSettings({ 
  activeConfig, 
  onSave, 
  isLoading: isSaving = false, 
  className,
  // Destructure new props
  providers,
  statuses,
  availableModels,
  modelsLoading,
  modelsError,
}: LocalProviderSettingsProps) {

  const [selectedChatModel, setSelectedChatModel] = useState<string | null>(null);
  const [selectedEmbeddingModel, setSelectedEmbeddingModel] = useState<string | null>(null);
  const [selectedHtmlMarkdownModel, setSelectedHtmlMarkdownModel] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  // Find the specific provider object based on the activeConfig
  const currentProvider = findProviderById(activeConfig?.provider || null, providers);
  // Get the status for this specific provider
  const currentProviderStatus = currentProvider ? statuses[currentProvider.id] : null;

  // Initialize selected models from activeConfig
  useEffect(() => {
    if (activeConfig) {
      setSelectedChatModel(activeConfig.chatModel);
      setSelectedEmbeddingModel(activeConfig.embeddingModel);
      setSelectedHtmlMarkdownModel(activeConfig.htmlMarkdownModel);
      setHasChanges(false);
    } else {
        setSelectedChatModel(null);
        setSelectedEmbeddingModel(null);
        setSelectedHtmlMarkdownModel(null);
        setHasChanges(false);
    }
  }, [activeConfig]);

  // Handle model selections & track changes
  const handleSelection = useCallback((type: 'chat' | 'embedding' | 'htmlMarkdown', value: string) => {
    let originalValue: string | null = null;
    switch (type) {
        case 'chat':
            setSelectedChatModel(value);
            originalValue = activeConfig?.chatModel ?? null;
            break;
        case 'embedding':
            setSelectedEmbeddingModel(value);
            originalValue = activeConfig?.embeddingModel ?? null;
            break;
        case 'htmlMarkdown':
            setSelectedHtmlMarkdownModel(value);
            originalValue = activeConfig?.htmlMarkdownModel ?? null;
            break;
    }
    setHasChanges(
        (type === 'chat' && value !== originalValue) ||
        (type === 'embedding' && value !== (activeConfig?.embeddingModel ?? null)) ||
        (type === 'htmlMarkdown' && value !== (activeConfig?.htmlMarkdownModel ?? null)) ||
        (selectedChatModel !== (activeConfig?.chatModel ?? null) && type !== 'chat') ||
        (selectedEmbeddingModel !== (activeConfig?.embeddingModel ?? null) && type !== 'embedding') ||
        (selectedHtmlMarkdownModel !== (activeConfig?.htmlMarkdownModel ?? null) && type !== 'htmlMarkdown')
    );
  }, [activeConfig, selectedChatModel, selectedEmbeddingModel, selectedHtmlMarkdownModel]);

  // Save changes
  const handleSaveChanges = async () => {
    if (!hasChanges || isSaving || !activeConfig) return;
    const configToSave: Partial<UserConfig> = {
        provider: activeConfig.provider, 
    };
    if (selectedChatModel !== activeConfig.chatModel) {
        configToSave.chatModel = selectedChatModel;
    }
    if (selectedEmbeddingModel !== activeConfig.embeddingModel) {
        configToSave.embeddingModel = selectedEmbeddingModel;
    }
    if (selectedHtmlMarkdownModel !== activeConfig.htmlMarkdownModel) {
        configToSave.htmlMarkdownModel = selectedHtmlMarkdownModel;
    }
    
    if (Object.keys(configToSave).length > 1) { 
        try {
            await onSave(configToSave);
            setHasChanges(false);
        } catch (error) { 
            console.error("Failed to save local provider settings:", error); 
        }
    }
  };

  // Filter available models
  const chatModels = availableModels.filter(m => !m.id.toLowerCase().includes('embed'));
  const embeddingModels = availableModels.filter(m => m.id.toLowerCase().includes('embed'));

  // --- Render logic ---
  if (!currentProvider) {
    return (
      <div className={cn("p-6", className)}>
        <p className="text-muted-foreground">
            The configured local provider ('{activeConfig?.provider || "none"}') was not detected. Please ensure it's running.
        </p>
      </div>
    );
  }
  
  return (
    <div className={cn("p-6 space-y-6", className)}>
      {/* Display Current Provider Info */}
      <div className="flex items-center p-3 border rounded-md bg-muted/50">
         <img src={currentProvider.logo} alt={`${currentProvider.name} logo`} className="w-8 h-8 rounded mr-3 shrink-0 object-contain" />
         <div>
             <p className="font-medium">{currentProvider.name}</p>
             <p className="text-xs text-muted-foreground">Endpoint: {currentProvider.endpoint}</p>
         </div>
          <div className="ml-auto pl-2">
             {currentProviderStatus === 'connected' && <span className="text-xs text-green-600 font-medium">Connected</span>}
             {currentProviderStatus === 'checking' && <span className="text-xs text-muted-foreground">Checking...</span>}
             {currentProviderStatus === 'not-running' && <span className="text-xs text-orange-600">Not Running</span>}
              {currentProviderStatus === 'error' && <span className="text-xs text-red-600">Error</span>}
         </div>
       </div>

      {/* Model Selection */}
      <div className="space-y-4">
          <h3 className="text-lg font-medium border-b pb-2 mb-4">Model Selection</h3>
          {modelsLoading && <p className="text-muted-foreground text-sm">Loading models...</p>}
          {modelsError && <p className="text-red-500 text-sm">Error loading models: {modelsError}</p>}
          
          {!modelsLoading && !modelsError && (
            <>
               {/* Chat Model */}
                <div className="space-y-1">
                    <label htmlFor="local-chat-model" className="block text-sm font-medium">Chat Model</label>
                    <ModelSelect 
                    id="local-chat-model"
                    models={chatModels} 
                    selectedModel={selectedChatModel} 
                    onSelect={(value) => handleSelection('chat', value)} 
                    placeholder="Select chat model..."
                    />
                </div>

                {/* Embedding Model */}
                <div className="space-y-1">
                    <label htmlFor="local-embedding-model" className="block text-sm font-medium">Embedding Model</label>
                    <ModelSelect 
                    id="local-embedding-model"
                    models={embeddingModels} 
                    selectedModel={selectedEmbeddingModel} 
                    onSelect={(value) => handleSelection('embedding', value)} 
                    placeholder="Select embedding model..."
                    />
                     <p className="text-xs text-muted-foreground">Used for semantic search and context retrieval.</p>
                </div>

                {/* HTML->Markdown Model */}
                <div className="space-y-1">
                    <label htmlFor="local-html-markdown-model" className="block text-sm font-medium">HTML-to-Markdown Model</label>
                    <ModelSelect 
                        id="local-html-markdown-model"
                        models={defaultHtmlMarkdownModels} // Use default list for now
                        selectedModel={selectedHtmlMarkdownModel} 
                        onSelect={(value) => handleSelection('htmlMarkdown', value)} 
                        placeholder="Select HTML parser..."
                    />
                </div>
            </>
          )}
      </div>

      {/* Save Button */}
      <div className="pt-4">
        <Button
          onClick={handleSaveChanges}
          disabled={!hasChanges || isSaving || modelsLoading || modelsError !== null || currentProviderStatus !== 'connected'} 
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
        {!hasChanges && <p className="text-xs text-muted-foreground mt-2">No changes to save.</p>} 
      </div>

    </div>
  );
}

// Helper Select Component
interface ModelSelectProps {
  id: string;
  models: Model[];
  selectedModel: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ id, models, selectedModel, onSelect, placeholder }) => {
  if (!models || models.length === 0) {
     return (
        <Select disabled>
           <SelectTrigger id={id} className="w-full h-10 text-base">
              <SelectValue placeholder="No models available" />
           </SelectTrigger>
        </Select>
     );
   }

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