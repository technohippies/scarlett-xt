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
import { sendMessage } from '../../utils/messaging';

const avatarSrc = "/images/scarlett-holding-dress.png"; 

interface Model {
  id: string;
  name: string;
}

// Placeholder data for Ollama embedding models
const ollamaEmbeddingModels: Model[] = [
  { id: "bge-m3:latest", name: "BGE M3 (Recommended)" },
  { id: "nomic-embed-text:latest", name: "Nomic Embed Text" },
  { id: "snowflake-arctic-embed2:latest", name: "Snowflake Arctic Embed" },
];

// Placeholder data for OpenRouter models
const openRouterFreeModels: Model[] = [
  { id: "google/gemma-3-27b-it", name: "Google: Gemma 3 27B" },
  { id: "qwen/qwq-32b", name: "Qwen: QwQ 32B" },
  { id: "google/gemini-2-flash-experimental", name: "Google: Gemini 2.0 Flash Experimental" },
  { id: "google/gemini-2-flash-thinking-experimental", name: "Google: Gemini 2.0 Flash Thinking Experimental" },
  { id: "nvidia/llama-3.1-nemotron-ultra-253b-v1", name: "NVIDIA: Llama 3.1 Nemotron Ultra 253B v1" },
  { id: "deepseek/deepseek-r1-zero", name: "DeepSeek: DeepSeek R1 Zero" },
  { id: "deepseek/deepseek-v3-base", name: "DeepSeek: DeepSeek V3 Base" },
];

// ... sortModels function remains the same ...
// Sorting function
const preferredModelPatterns = [
  /^google\/gemma-3-.*$/i, 
  /^qwen\/qwq-32b/i,        
  /^google\/gemini-2-flash/i, 
];
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

// Update props definition to include embeddingModelId
// Export the payload type
export interface SelectionPayload {
  chatModel: string;
  embeddingModel?: string; // Optional for OpenRouter
}
interface ModelSelectionPageProps {
  providerConfig: any; 
  onSelectionConfirmed: (payload: SelectionPayload) => void; // Updated callback type
}

const ModelSelectionPage: React.FC<ModelSelectionPageProps> = ({ 
  providerConfig, 
  onSelectionConfirmed 
}) => {
  const [chatModels, setChatModels] = useState<Model[]>([]); // Renamed from models
  const [embeddingModels, setEmbeddingModels] = useState<Model[]>([]); // New state for embedding models
  const [selectedChatModel, setSelectedChatModel] = useState<string>(""); // Renamed
  const [selectedEmbeddingModel, setSelectedEmbeddingModel] = useState<string>(""); // New state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openRouterTier, setOpenRouterTier] = useState('free'); 

  useEffect(() => {
    const loadModels = async () => {
      if (!providerConfig) {
        setError("Provider configuration is missing.");
        setIsLoading(false);
        return;
      }

      console.log("ModelSelectionPage received config:", providerConfig);
      setIsLoading(true);
      setError(null);
      setChatModels([]); // Clear previous models
      setEmbeddingModels([]); // Clear previous models
      setSelectedChatModel("");
      setSelectedEmbeddingModel("");

      try {
        const config = providerConfig;
        let fetchedChatModels: Model[] = [];
        let fetchedEmbeddingModels: Model[] = [];

        if (config.provider === 'openrouter') {
          console.log("Loading OpenRouter models...");
          if (openRouterTier === 'free') {
             fetchedChatModels = openRouterFreeModels;
          } else {
             console.log("Fetching paid models (not implemented yet)");
             fetchedChatModels = []; 
          }
          // OpenRouter doesn't need separate embedding model selection
          fetchedEmbeddingModels = [];
        } else {
          // Local provider - Fetch both chat and embedding models
          console.log(`Requesting models for local provider: ${config.provider}...`);
          
          // Fetch CHAT models (using placeholder)
          const chatModelsResponse: { success: boolean; models?: any[]; error?: string } = 
              { success: true, models: [{id: 'llama3:latest', name: 'llama3:latest'}, {id: 'gemma:7b', name: 'gemma:7b'}, {id: 'mistral:latest', name: 'mistral:latest'}] }; 
          if (!chatModelsResponse.success || !chatModelsResponse.models) {
            throw new Error(chatModelsResponse.error || `Failed to load chat models for ${config.provider}.`);
          }
          fetchedChatModels = chatModelsResponse.models.map((m: any) => ({ id: m.id || m.name, name: m.name || m.id }));
          console.log("Local chat models response (placeholder):", fetchedChatModels);

          // Fetch EMBEDDING models dynamically from background script
          console.log("Fetching local embedding models from background...");
          // Use the endpoint from the provider config
          const endpointToCall = config.endpoint || 'http://localhost:11434'; // Default if not provided
          const embeddingModelsResponse = await sendMessage('getOllamaModels', { endpoint: endpointToCall });
          
          if (!embeddingModelsResponse?.success || !embeddingModelsResponse?.models) {
            console.error("Failed to fetch embedding models from background:", embeddingModelsResponse?.error);
            // Set error state but potentially continue without embedding models?
            // Or throw the error:
            throw new Error(embeddingModelsResponse?.error || `Failed to fetch embedding models from ${endpointToCall}.`);
          }
          fetchedEmbeddingModels = embeddingModelsResponse.models;
          console.log("Local embedding models response:", fetchedEmbeddingModels);
          
          // --- Filter for likely embedding models --- 
          const embeddingKeywords = ['embed', 'bge', 'minilm', 'paraphrase', 'instructor']; // Add more if needed
          const likelyEmbeddingModels = fetchedEmbeddingModels.filter(model => {
            const modelIdLower = model.id.toLowerCase();
            return embeddingKeywords.some(keyword => modelIdLower.includes(keyword));
          });
          console.log("Filtered embedding models:", likelyEmbeddingModels);
          // Use the filtered list from now on
          fetchedEmbeddingModels = likelyEmbeddingModels;
          // ----------------------------------------
        }

        // Sort and set chat models
        const sortedChatModels = sortModels(fetchedChatModels);
        setChatModels(sortedChatModels);
        const defaultChatModel =
          sortedChatModels.find(m => preferredModelPatterns.some(p => p.test(m.id))) ||
          sortedChatModels[0];
        setSelectedChatModel(defaultChatModel?.id || "");

        // Sort and set embedding models (if any)
        if (fetchedEmbeddingModels.length > 0) {
          // Sort embedding models (e.g., prioritize bge-m3)
          const sortedEmbeddingModels = [...fetchedEmbeddingModels].sort((a, b) => {
            const aIsBGE = a.id.includes('bge-m3');
            const bIsBGE = b.id.includes('bge-m3');
            if (aIsBGE && !bIsBGE) return -1;
            if (!aIsBGE && bIsBGE) return 1;
            // Add other preferences if needed (e.g., nomic)
            return a.name.localeCompare(b.name);
          });
          setEmbeddingModels(sortedEmbeddingModels);
          
          // Default to the first model in the sorted list (which will be bge-m3 if present)
          setSelectedEmbeddingModel(sortedEmbeddingModels[0]?.id || "");
        } else {
          // Handle case where no embedding models were found/returned
           setEmbeddingModels([]);
           setSelectedEmbeddingModel("");
           if (config.provider !== 'openrouter') {
             console.warn("No embedding models found for local provider.");
             // Optionally set an error or notification
           }
        }

      } catch (err: any) {
        console.error("Error loading models:", err);
        setError(err.message || "An unknown error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    loadModels();
  }, [providerConfig, openRouterTier]); 

  const handleChatModelSelect = (modelId: string) => {
    setSelectedChatModel(modelId);
  };

  // New handler for embedding model selection
  const handleEmbeddingModelSelect = (modelId: string) => {
    setSelectedEmbeddingModel(modelId);
  };

  const handleConfirmClick = async () => {
    // Check if the necessary model(s) are selected
    const isLocal = providerConfig?.provider !== 'openrouter';
    if (!selectedChatModel || (isLocal && !selectedEmbeddingModel))
    {
        setError("Please select both a chat and an embedding model for local providers.");
        return;
    } 
    if (!selectedChatModel && !isLocal) {
        setError("Please select a chat model for OpenRouter.");
        return;
    }

    // Clear previous errors
    setError(null);

    let requiredPermissions: browser.Permissions.Permissions = { origins: [], permissions: [] };
    let permissionsToRequest: browser.Permissions.Permissions = { origins: [], permissions: [] };

    // --- Determine Required Host Permission --- 
    if (isLocal && providerConfig?.endpoint) {
      try {
        const url = new URL(providerConfig.endpoint);
        const requiredOrigin = `${url.protocol}//${url.hostname}:${url.port}/*`;
        requiredPermissions.origins?.push(requiredOrigin);
      } catch (urlError: any) {
        console.error("[Permissions] Invalid endpoint URL for permission check:", providerConfig.endpoint, urlError);
        setError(`Invalid provider endpoint URL: ${providerConfig.endpoint}`);
        return; // Stop if URL is invalid
      }
    }

    // --- Determine Required Optional Permissions ---
    // Add history permission requirement
    requiredPermissions.permissions?.push("history");
    // Add other optional permissions here if needed later

    // --- Check Which Permissions Are Missing ---
    if ((requiredPermissions.origins && requiredPermissions.origins.length > 0) || 
        (requiredPermissions.permissions && requiredPermissions.permissions.length > 0)) 
    {
      try {
        const hasPermissions = await browser.permissions.contains(requiredPermissions);
        console.log(`[Permissions] Already has all required permissions? ${hasPermissions}`);
        
        if (!hasPermissions) {
            // Figure out *which* specific permissions are missing to request them precisely
            if (requiredPermissions.origins && requiredPermissions.origins.length > 0) {
                const hasOrigins = await browser.permissions.contains({ origins: requiredPermissions.origins });
                if (!hasOrigins) {
                    permissionsToRequest.origins = requiredPermissions.origins;
                }
            }
            if (requiredPermissions.permissions && requiredPermissions.permissions.length > 0) {
                const hasPerms = await browser.permissions.contains({ permissions: requiredPermissions.permissions });
                if (!hasPerms) {
                    permissionsToRequest.permissions = requiredPermissions.permissions;
                }
            }

            // If any permissions are missing, request them
            if ((permissionsToRequest.origins && permissionsToRequest.origins.length > 0) || 
                (permissionsToRequest.permissions && permissionsToRequest.permissions.length > 0)) 
            {
                console.log(`[Permissions] Requesting missing permissions:`, permissionsToRequest);
                const granted = await browser.permissions.request(permissionsToRequest);
                console.log(`[Permissions] Permission request result: ${granted}`);
                if (!granted) {
                    // Construct a more informative error message
                    let deniedPerms: string[] = [];
                    if (permissionsToRequest.origins) deniedPerms.push(...permissionsToRequest.origins);
                    if (permissionsToRequest.permissions) deniedPerms.push(...permissionsToRequest.permissions);
                    setError(`Permission denied for: ${deniedPerms.join(', ')}. Cannot proceed without required permissions.`);
                    return; // Stop if permissions denied
                }
            } else {
                 console.log("[Permissions] All required permissions were already granted individually."); // Should not happen if contains(all) was false, but good sanity check
            }
        }
      } catch (permError: any) {
        console.error(`[Permissions] Error checking or requesting permissions:`, permError);
        setError(`Error handling permissions: ${permError.message}`);
        return; // Stop on error
      }
    }
    // ---------------------------------------------

    // If we reached here, all necessary permissions are granted
    console.log("Confirming model selection:", selectedChatModel, isLocal ? selectedEmbeddingModel : '(N/A)');
    onSelectionConfirmed({
      chatModel: selectedChatModel,
      embeddingModel: isLocal ? selectedEmbeddingModel : undefined
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src={avatarSrc}
          alt="Scarlett Wizard Avatar"
          className="w-48 h-48 mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-3">Select Your Model(s)</h1>
        <p className="text-base text-muted-foreground mb-8">
          Choose the {providerConfig?.provider === 'openrouter' ? 'OpenRouter' : (providerConfig?.name || 'local')} model(s) Scarlett should use.
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
                   <label className="block text-sm font-medium mb-1">Chat Model</label>
                   <ModelSelect 
                     models={chatModels} 
                     selectedModel={selectedChatModel} 
                     onSelect={handleChatModelSelect} 
                   />
                </TabsContent>
                <TabsContent value="paid" className="mt-4">
                    <p>Paid model selection coming soon.</p>
                </TabsContent>
              </Tabs>
            ) : (
              // Local Provider: Show both dropdowns
              <>
                <div className="space-y-1">
                  <label className="block text-sm font-medium">Chat</label>
                  <ModelSelect 
                    models={chatModels} 
                    selectedModel={selectedChatModel} 
                    onSelect={handleChatModelSelect} 
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium">Embedding</label>
                  <ModelSelect 
                    models={embeddingModels} 
                    selectedModel={selectedEmbeddingModel} 
                    onSelect={handleEmbeddingModelSelect} 
                  />
                </div>
              </>
            )}
            
             {/* REMOVED redundant selected model display div */}
             {/* 
             {selectedChatModel && (
               <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                 Selected Chat: {chatModels.find(m => m.id === selectedChatModel)?.name || selectedChatModel}
               </div>
             )}
             */}

            <Button 
              size="lg"
              onClick={handleConfirmClick}
              // Disable if required models aren't selected
              disabled={isLoading || !selectedChatModel || (providerConfig?.provider !== 'openrouter' && !selectedEmbeddingModel)}
              className="w-full"
            >
              Confirm Selection(s)
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// ... ModelSelect component remains the same ...
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