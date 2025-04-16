import React, { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';
import { Button } from '../../src/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../src/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../src/components/ui/select";

// Placeholder - Replace with a different image path if desired
const avatarSrc = "/images/scarlett-wizard.png"; 

// Define types for models (can be refined)
interface Model {
  id: string;
  name: string; // Often the same as id for local models
  // Add other properties if needed (e.g., size, provider)
}

// OpenRouter free models data (as provided)
const openRouterFreeModels: Model[] = [
  { id: "google/gemma-3-27b-it", name: "Google: Gemma 3 27B" },
  { id: "qwen/qwq-32b", name: "Qwen: QwQ 32B" },
  { id: "google/gemini-2-flash-experimental", name: "Google: Gemini 2.0 Flash Experimental" },
  { id: "google/gemini-2-flash-thinking-experimental", name: "Google: Gemini 2.0 Flash Thinking Experimental" },
  { id: "nvidia/llama-3.1-nemotron-ultra-253b-v1", name: "NVIDIA: Llama 3.1 Nemotron Ultra 253B v1" },
  { id: "deepseek/deepseek-r1-zero", name: "DeepSeek: DeepSeek R1 Zero" },
  { id: "deepseek/deepseek-v3-base", name: "DeepSeek: DeepSeek V3 Base" },
];

// Model sorting preferences
const preferredModelPatterns = [
  /^google\/gemma-3-.*$/i, // Gemma 3 (any size)
  /^qwen\/qwq-32b/i,        // Qwen QwQ 32B
  /^google\/gemini-2-flash/i, // Gemini 2 Flash
];

// Sorting function
const sortModels = (models: Model[]): Model[] => {
  return [...models].sort((a, b) => {
    let aPref = preferredModelPatterns.length;
    let bPref = preferredModelPatterns.length;

    for (let i = 0; i < preferredModelPatterns.length; i++) {
      if (preferredModelPatterns[i].test(a.id)) {
        aPref = i;
        break;
      }
    }
    for (let i = 0; i < preferredModelPatterns.length; i++) {
      if (preferredModelPatterns[i].test(b.id)) {
        bPref = i;
        break;
      }
    }

    if (aPref !== bPref) {
      return aPref - bPref; // Lower preference index comes first
    }

    // If preference is the same, sort alphabetically by name
    return (a.name || a.id).localeCompare(b.name || b.id);
  });
};

function ModelSelectionPage() {
  // TODO: Define providerConfig type more strictly if needed
  const [providerConfig, setProviderConfig] = useState<any>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>(""); // Use empty string for Select initial
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openRouterTier, setOpenRouterTier] = useState('free'); // For OpenRouter tabs

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // 1. Get saved provider config
        console.log("Requesting provider config...");
        // Placeholder response - adjust type as needed for real implementation
        const configResponse: { success: boolean; config?: any; error?: string } = 
          { success: true, config: { provider: 'ollama', endpoint: 'http://localhost:11434', checkPath: '/api/tags' } }; 
        console.log("Config response (placeholder):", configResponse);

        if (!configResponse.success || !configResponse.config) {
          // Use the error field if it exists, otherwise a default message
          throw new Error(configResponse.error || "Failed to load provider configuration.");
        }
        setProviderConfig(configResponse.config);
        const config = configResponse.config;

        // 2. Get models based on provider
        let fetchedModels: Model[] = [];
        if (config.provider === 'openrouter') {
          console.log("Provider is OpenRouter, loading models...");
          // For now, just load free models. TODO: Add logic for paid tier.
           if (openRouterTier === 'free') {
             fetchedModels = openRouterFreeModels;
           } else {
             // Placeholder for fetching paid models
             console.log("Fetching paid models (not implemented yet)");
             fetchedModels = []; 
           }
        } else {
          // Local provider
          console.log(`Provider is ${config.provider}, requesting local models...`);
          // Placeholder response - adjust type as needed
          const modelsResponse: { success: boolean; models?: any[]; error?: string } = 
             { success: true, models: [{id: 'llama3:latest', name: 'llama3:latest'}, {id: 'gemma:7b', name: 'gemma:7b'}, {id: 'mistral:latest', name: 'mistral:latest'}] }; 
          console.log("Models response (placeholder):", modelsResponse);
          
          if (!modelsResponse.success || !modelsResponse.models) {
            // Use error field if it exists
            throw new Error(modelsResponse.error || `Failed to load models for ${config.provider}.`);
          }
          fetchedModels = modelsResponse.models.map((m: any) => ({ id: m.id || m.name, name: m.name || m.id }));
        }

        // 3. Sort models
        const sortedModels = sortModels(fetchedModels);
        setModels(sortedModels);

        // 4. Set default selection (first preferred model found, or first model otherwise)
        const defaultModel = 
          sortedModels.find(m => preferredModelPatterns.some(p => p.test(m.id))) ||
          sortedModels[0];
        
        if (defaultModel) {
           console.log("Setting default model selection:", defaultModel.id);
           setSelectedModel(defaultModel.id);
        } else {
           console.log("No models found to set default selection.");
           setSelectedModel("");
        }

      } catch (err: any) {
        console.error("Error loading data:", err);
        setError(err.message || "An unknown error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [openRouterTier]); // Re-fetch if OpenRouter tier changes

  const handleModelSelect = (modelId: string) => {
    console.log("Model selected via Select:", modelId);
    setSelectedModel(modelId);
  };

  const handleConfirmSelection = async () => {
    if (!selectedModel) return;
    console.log("Saving selected model:", selectedModel);
    setIsLoading(true); // Show loading state on button?
    setError(null);
    try {
       // Placeholder response - adjust type
       const response: { success: boolean; error?: string } = { success: true }; 
       console.log("Save model response (placeholder):", response);

       if (response.success) {
         console.log("Model selection saved.");
         // TODO: Navigate to the final step or close the onboarding tab.
         // Example: Close the current tab
          browser.tabs.getCurrent().then(tab => {
            if (tab?.id) browser.tabs.remove(tab.id);
          });
       } else {
          // Use error field
          throw new Error(response.error || "Failed to save model selection.");
       }
     } catch (err: any) {
        console.error("Error saving model:", err);
        setError(err.message || "An unknown error occurred while saving.");
        setIsLoading(false);
     }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src={avatarSrc}
          alt="Scarlett Avatar"
          className="w-48 h-48 mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-3">Select Your Model</h1>
        <p className="text-base text-muted-foreground mb-8">
          Choose the model you want Scarlett to use.
        </p>

        {isLoading ? (
          <p>Loading...</p> // Simple loading indicator
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="w-full space-y-6">
            {providerConfig?.provider === 'openrouter' ? (
              <Tabs value={openRouterTier} onValueChange={setOpenRouterTier} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="free">Free Models</TabsTrigger>
                  <TabsTrigger value="paid" disabled>Paid Models (Soon)</TabsTrigger> {/* Placeholder for paid */}
                </TabsList>
                <TabsContent value="free" className="mt-4">
                  {/* Model Select Component */} 
                   <ModelSelect 
                     models={models} 
                     selectedModel={selectedModel} 
                     onSelect={handleModelSelect} 
                   />
                </TabsContent>
                <TabsContent value="paid" className="mt-4">
                    <p>Paid model selection coming soon.</p>
                </TabsContent>
              </Tabs>
            ) : (
               /* Model Select Component for Local */
               <ModelSelect 
                 models={models} 
                 selectedModel={selectedModel} 
                 onSelect={handleModelSelect} 
               />
            )}
            
             {/* Display selected model details? */} 
             {selectedModel && (
               <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                 Selected: {models.find(m => m.id === selectedModel)?.name || selectedModel}
               </div>
             )}

            <Button 
              size="lg"
              onClick={handleConfirmSelection}
              disabled={!selectedModel || isLoading}
              className="w-full"
            >
              Confirm Selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper component for the Select UI
interface ModelSelectProps {
  models: Model[];
  selectedModel: string;
  onSelect: (value: string) => void;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ models, selectedModel, onSelect }) => {
  if (!models || models.length === 0) {
     return <p className="text-center text-muted-foreground">No models available.</p>;
   }

  return (
    <Select value={selectedModel} onValueChange={onSelect}>
      <SelectTrigger className="w-full h-11 text-base">
        <SelectValue placeholder="Select a model..." />
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

export default ModelSelectionPage; 