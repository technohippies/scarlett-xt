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
import { sendMessage, onMessage, ProtocolMap, GetOllamaModelsResponse } from '../../utils/messaging';
import type { Message } from '@webext-core/messaging';

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
  // Removed due to 404 error from OpenRouter API
  // { id: "nvidia/llama-3.1-nemotron-ultra-253b-v1", name: "NVIDIA: Llama 3.1 Nemotron Ultra 253B v1" },
  { id: "deepseek/deepseek-r1-zero", name: "DeepSeek: DeepSeek R1 Zero" },
  { id: "deepseek/deepseek-v3-base", name: "DeepSeek: DeepSeek V3 Base" },
];

// Add hardcoded Groq models
const groqModels: Model[] = [
  { id: "llama3-70b-8192", name: "LLaMA3-70b (Recommended)" },
  { id: "llama3-8b-8192", name: "LLaMA3-8b" },
  { id: "mixtral-8x7b-32768", name: "Mixtral-8x7b" },
  { id: "gemma-7b-it", name: "Gemma-7b" },
  // { id: "gemma2-9b-it", name: "Gemma2-9b" }, // Add when available if needed
];

// Sorting function
const preferredModelPatterns = [
  /^llama3-70b/i, // Prioritize Llama 3 70b for Groq
  /^google\/gemma-3-/i, // Keep others for OpenRouter
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
  // Determine if this provider requires an embedding model (only Ollama/local)
  const needsEmbedding = providerConfig?.provider === 'ollama';

  // --- Effect to TRIGGER model loading --- 
  useEffect(() => {
    // Only trigger when providerConfig is available
    if (!providerConfig) {
      // Optional: set error or keep loading until config arrives
      console.warn("[ModelSelectionPage] Waiting for providerConfig...");
      // setError("Provider configuration is missing."); 
      // setIsLoading(false);
      return;
    }

    console.log("ModelSelectionPage received config, triggering model load:", providerConfig);
    setIsLoading(true); // Set loading when triggering
    setError(null);
    setChatModels([]);
    setEmbeddingModels([]);
    setSelectedChatModel("");
    setSelectedEmbeddingModel("");

    try {
      const config = providerConfig;
      if (config.provider === 'openrouter') {
        console.log("Loading OpenRouter models...");
        const models = openRouterTier === 'free' ? openRouterFreeModels : [];
        // --- Directly process OpenRouter models (no background fetch needed) --
        handleModelResult({ success: true, models: models }, config.provider);
      } else if (config.provider === 'groq') {
        console.log("Loading Groq models (hardcoded)...");
        // --- Directly process Groq models (no background fetch needed) --
        handleModelResult({ success: true, models: groqModels }, config.provider);
      } else { // Ollama or other local
        // --- Send message to background to fetch local models --- 
        const endpointToCall = config.endpoint || 'http://localhost:11434';
        console.log(`[ModelSelectionPage] Sending getOllamaModels message for endpoint: ${endpointToCall}`);
        // Correctly pass the payload expected by (data: { endpoint: string }) => void
        sendMessage('getOllamaModels', { endpoint: endpointToCall });
        // Keep isLoading true - listener will set it to false
      }
    } catch (err: any) {
      // Catch errors during the *triggering* phase (e.g., config issues)
      console.error("Error triggering model load:", err);
      setError(err.message || "An unknown error occurred initiating model load.");
      setIsLoading(false); // Stop loading on trigger error
    }
  }, [providerConfig, openRouterTier]); // Re-run if config or tier changes

  // --- Effect to LISTEN for model results from background --- 
  useEffect(() => {
    const listener = onMessage('getOllamaModelsResult', (message: Message<ProtocolMap, 'getOllamaModelsResult'>) => {
        console.log("[ModelSelectionPage] Received getOllamaModelsResult:", message.data);
        // Pass the result and provider type to the handler function
        handleModelResult(message.data, providerConfig?.provider);
    });

    // Cleanup listener on unmount
    return () => {
      // Call the listener function directly to remove it
      listener(); 
    };
  }, [providerConfig]); // Re-run listener setup if providerConfig changes (though provider type is used inside)

  // --- Function to process model results (from background or direct) --- 
  const handleModelResult = (result: GetOllamaModelsResponse, providerType: string) => {
      if (!result || !result.success || !result.models) {
        console.error("Failed to fetch/process models:", result?.error);
        setError(result?.error || `Failed to fetch models for ${providerType}.`);
        setChatModels([]);
        setEmbeddingModels([]);
      } else {
        console.log(`Processing models for ${providerType}:`, result.models);
        let allFetchedModels = result.models;
        setError(null);

        // Chat Models
        const sortedChatModels = sortModels(allFetchedModels);
        setChatModels(sortedChatModels);
        const defaultChatModel =
          sortedChatModels.find(m => preferredModelPatterns.some(p => p.test(m.id))) ||
          sortedChatModels.find(m => m.id.toLowerCase().includes('llama3-70b')) ||
          sortedChatModels.find(m => m.id.toLowerCase().includes('gemma')) ||
          sortedChatModels[0];
        setSelectedChatModel(defaultChatModel?.id || "");
        console.log("Default chat model set to:", defaultChatModel?.id);

        // Embedding Models (only for Ollama)
        if (providerType === 'ollama') {
          const embeddingKeywords = ['embed', 'bge', 'minilm', 'paraphrase', 'instructor'];
          const likelyEmbeddingModels = allFetchedModels.filter((model: Model) => {
            const modelIdLower = model.id.toLowerCase();
            return embeddingKeywords.some(keyword => modelIdLower.includes(keyword));
          });

          if (likelyEmbeddingModels.length > 0) {
            const sortedEmbeddingModels = [...likelyEmbeddingModels].sort((a, b) => {
              const aIsBGE = a.id.includes('bge-m3');
              const bIsBGE = b.id.includes('bge-m3');
              if (aIsBGE && !bIsBGE) return -1;
              if (!aIsBGE && bIsBGE) return 1;
              return a.name.localeCompare(b.name);
            });
            setEmbeddingModels(sortedEmbeddingModels);
            setSelectedEmbeddingModel(sortedEmbeddingModels[0]?.id || "");
             console.log("Default embedding model set to:", sortedEmbeddingModels[0]?.id);
          } else {
            console.warn("No likely embedding models found for Ollama after filtering.");
            setEmbeddingModels([]);
            setSelectedEmbeddingModel("");
          }
        } else {
          setEmbeddingModels([]);
          setSelectedEmbeddingModel("");
        }
      }
      setIsLoading(false); // Set loading false after processing result (success or error)
  };

  const handleChatModelSelect = (modelId: string) => {
    setSelectedChatModel(modelId);
  };

  // New handler for embedding model selection
  const handleEmbeddingModelSelect = (modelId: string) => {
    setSelectedEmbeddingModel(modelId);
  };

  const handleConfirmClick = async () => {
    const isLocal = providerConfig?.provider === 'ollama';
    const needsEmbedding = isLocal; 

    if (!selectedChatModel || (needsEmbedding && !selectedEmbeddingModel))
    {
        setError(needsEmbedding ? "Please select both a chat and an embedding model for Ollama." : "Please select a chat model.");
        return;
    } 

    setError(null);
    let requiredPermissions: browser.Permissions.Permissions = { origins: [], permissions: [] };
    let permissionsToRequest: browser.Permissions.Permissions = { origins: [], permissions: [] };

    // Determine Required Host Permission
    if (isLocal && providerConfig?.endpoint) {
      try {
        const url = new URL(providerConfig.endpoint);
        const requiredOrigin = `${url.protocol}//${url.hostname}:${url.port}/*`;
        requiredPermissions.origins?.push(requiredOrigin);
      } catch (urlError: any) {
        console.error("[Permissions] Invalid endpoint URL for permission check:", providerConfig.endpoint, urlError);
        setError(`Invalid provider endpoint URL: ${providerConfig.endpoint}`);
        return;
      }
    }
    
    // Determine Required Optional Permissions (e.g., history)
    requiredPermissions.permissions?.push("history");

    // Check Which Permissions Are Missing
    if ((requiredPermissions.origins && requiredPermissions.origins.length > 0) || 
        (requiredPermissions.permissions && requiredPermissions.permissions.length > 0)) 
    {
      try {
        const hasPermissions = await browser.permissions.contains(requiredPermissions);
        console.log(`[Permissions] Already has all required permissions? ${hasPermissions}`);
        
        if (!hasPermissions) {
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

            if ((permissionsToRequest.origins && permissionsToRequest.origins.length > 0) || 
                (permissionsToRequest.permissions && permissionsToRequest.permissions.length > 0)) 
            {
                console.log(`[Permissions] Requesting missing permissions:`, permissionsToRequest);
                const granted = await browser.permissions.request(permissionsToRequest);
                console.log(`[Permissions] Permission request result: ${granted}`);
                if (!granted) {
                    let deniedPerms: string[] = [];
                    if (permissionsToRequest.origins) deniedPerms.push(...permissionsToRequest.origins);
                    if (permissionsToRequest.permissions) deniedPerms.push(...permissionsToRequest.permissions);
                    setError(`Permission denied for: ${deniedPerms.join(', ')}. Cannot proceed without required permissions.`);
                    return;
                }
            } else {
                 console.log("[Permissions] All required permissions were already granted individually.");
            }
        }
      } catch (permError: any) {
        console.error(`[Permissions] Error checking or requesting permissions:`, permError);
        setError(`Error handling permissions: ${permError.message}`);
        return;
      }
    }

    console.log("Confirming model selection:", selectedChatModel, needsEmbedding ? selectedEmbeddingModel : '(N/A)');
    onSelectionConfirmed({
      chatModel: selectedChatModel,
      embeddingModel: needsEmbedding ? selectedEmbeddingModel : undefined
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center bg-card text-card-foreground rounded-lg shadow-lg">
        <img
          src={avatarSrc}
          alt="Scarlett Offering Handshake"
          className="w-48 h-48 mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-3">Select Your Model(s)</h1>
        <p className="text-base text-muted-foreground mb-8">
          Choose the {providerConfig?.name || providerConfig?.provider || 'selected'} model(s) Scarlett should use.
        </p>

        {isLoading ? (
          <p>Loading...</p> 
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="w-full space-y-6">
            {providerConfig?.provider === 'ollama' ? (
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
            ) : providerConfig?.provider === 'openrouter' ? (
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
            ) : providerConfig?.provider === 'groq' ? (
              <>
                <div className="space-y-1">
                  <label className="block text-sm font-medium">Chat Model</label>
                  <ModelSelect 
                    models={chatModels} 
                    selectedModel={selectedChatModel} 
                    onSelect={handleChatModelSelect} 
                  />
                </div>
              </>
            ) : (
              <p className="text-muted-foreground text-center">Model selection not applicable for this provider.</p>
            )}
            
            <Button 
              size="lg"
              onClick={handleConfirmClick}
              disabled={isLoading || !selectedChatModel || (needsEmbedding && !selectedEmbeddingModel)}
              className="w-full"
            >
              Confirm
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

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