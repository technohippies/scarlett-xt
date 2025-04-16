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

// Use a distinct avatar for this step
const avatarSrc = "/images/scarlett-wizard.png"; 

// Define types for models (can be refined)
interface Model {
  id: string;
  name: string;
}

// OpenRouter free models data 
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
  /^google\/gemma-3-.*$/i, 
  /^qwen\/qwq-32b/i,        
  /^google\/gemini-2-flash/i, 
];

// Sorting function
const sortModels = (models: Model[]): Model[] => {
  return [...models].sort((a, b) => {
    let aPref = preferredModelPatterns.length;
    let bPref = preferredModelPatterns.length;
    for (let i = 0; i < preferredModelPatterns.length; i++) {
      if (preferredModelPatterns[i].test(a.id)) { aPref = i; break; }
    }
    for (let i = 0; i < preferredModelPatterns.length; i++) {
      if (preferredModelPatterns[i].test(b.id)) { bPref = i; break; }
    }
    if (aPref !== bPref) return aPref - bPref;
    return (a.name || a.id).localeCompare(b.name || b.id);
  });
};

// Update props definition
interface ModelSelectionPageProps {
  providerConfig: any; // Config received from router
  onSelectionConfirmed: (modelId: string) => void; // Callback when done
}

// Accept props
const ModelSelectionPage: React.FC<ModelSelectionPageProps> = ({ 
  providerConfig, 
  onSelectionConfirmed 
}) => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openRouterTier, setOpenRouterTier] = useState('free'); 

  useEffect(() => {
    const loadModels = async () => {
      // Use providerConfig from props directly
      if (!providerConfig) {
        setError("Provider configuration is missing.");
        setIsLoading(false);
        return;
      }

      console.log("ModelSelectionPage received config:", providerConfig);
      setIsLoading(true);
      setError(null);
      try {
        // Remove fetching config, use prop
        // const configResponse = ... 
        const config = providerConfig;

        // Fetch models based on provider config from props
        let fetchedModels: Model[] = [];
        if (config.provider === 'openrouter') {
          console.log("Loading OpenRouter models...");
          if (openRouterTier === 'free') {
             fetchedModels = openRouterFreeModels;
          } else {
             console.log("Fetching paid models (not implemented yet)");
             fetchedModels = []; 
          }
        } else {
          // Local provider
          console.log(`Requesting models for local provider: ${config.provider}...`);
          // Placeholder for sending message
           const modelsResponse: { success: boolean; models?: any[]; error?: string } = 
              { success: true, models: [{id: 'llama3:latest', name: 'llama3:latest'}, {id: 'gemma:7b', name: 'gemma:7b'}, {id: 'mistral:latest', name: 'mistral:latest'}] }; 
           console.log("Local models response (placeholder):", modelsResponse);
           if (!modelsResponse.success || !modelsResponse.models) {
             throw new Error(modelsResponse.error || `Failed to load models for ${config.provider}.`);
           }
           fetchedModels = modelsResponse.models.map((m: any) => ({ id: m.id || m.name, name: m.name || m.id }));
        }

        const sortedModels = sortModels(fetchedModels);
        setModels(sortedModels);

        const defaultModel =
          sortedModels.find(m => preferredModelPatterns.some(p => p.test(m.id))) ||
          sortedModels[0];
        
        if (defaultModel) {
           setSelectedModel(defaultModel.id);
        } else {
           setSelectedModel("");
        }

      } catch (err: any) {
        console.error("Error loading models:", err);
        setError(err.message || "An unknown error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    loadModels();
  // Depend only on providerConfig prop and tier now
  }, [providerConfig, openRouterTier]); 

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
  };

  // Rename to avoid conflict, call prop
  const handleConfirmClick = async () => {
    if (!selectedModel) return;
    console.log("Confirming model selection:", selectedModel);
    // Call the callback prop passed from the router
    onSelectionConfirmed(selectedModel);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src={avatarSrc}
          alt="Scarlett Wizard Avatar"
          className="w-48 h-48 mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-3">Select Your Model</h1>
        <p className="text-base text-muted-foreground mb-8">
          Choose the {providerConfig?.provider === 'openrouter' ? 'OpenRouter' : (providerConfig?.name || 'local')} model Scarlett should use.
        </p>

        {isLoading ? (
          <p>Loading...</p> 
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="w-full space-y-6">
            {providerConfig?.provider === 'openrouter' ? (
              <Tabs value={openRouterTier} onValueChange={setOpenRouterTier} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="free">Free Models</TabsTrigger>
                  <TabsTrigger value="paid" disabled>Paid Models (Soon)</TabsTrigger>
                </TabsList>
                <TabsContent value="free" className="mt-4">
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
               <ModelSelect 
                 models={models} 
                 selectedModel={selectedModel} 
                 onSelect={handleModelSelect} 
               />
            )}
            
             {selectedModel && (
               <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                 Selected: {models.find(m => m.id === selectedModel)?.name || selectedModel}
               </div>
             )}

            <Button 
              size="lg"
              onClick={handleConfirmClick}
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
};

// Helper component for the Select UI (assuming it's still needed here or imported)
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