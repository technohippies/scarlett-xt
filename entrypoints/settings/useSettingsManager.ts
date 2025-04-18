import { useState, useEffect, useCallback } from 'react';
import { sendMessage, onMessage } from '../../utils/messaging';
import type { UserConfig, LocalProviderConfig } from '../../types/config'; // Adjust path as needed
import { useProviderStatus } from '../../hooks/useProviderStatus'; // Adjust path as needed

// Define the default configurations - ensure this aligns with UserConfig
const defaultConfigs: UserConfig = {
  providers: {
    ollama: {
      label: 'Ollama',
      type: 'ollama',
      apiUrl: 'http://localhost:11434',
      apiKey: '', // Ollama doesn't typically use API keys
      enabled: true,
      models: [], // Start empty, fetch later if needed
      isLocal: true,
      status: 'pending', // Initial status
    },
    openrouter: {
      label: 'OpenRouter',
      type: 'openrouter',
      apiUrl: 'https://openrouter.ai/api/v1',
      apiKey: '',
      enabled: false,
      models: [], // Example models, adjust as necessary
      isLocal: false,
      status: 'pending',
    },
    groq: {
      label: 'Groq',
      type: 'groq',
      apiUrl: 'https://api.groq.com/openai/v1',
      apiKey: '',
      enabled: false,
      models: [],
      isLocal: false,
      status: 'pending',
    },
    // Add other default providers like lmstudio, jan if needed
    lmstudio: {
      label: 'LM Studio',
      type: 'lmstudio',
      apiUrl: 'http://localhost:1234/v1', // Default LM Studio port
      apiKey: '', // LM Studio typically doesn't need an API key
      enabled: true,
      models: [],
      isLocal: true,
      status: 'pending',
    },
    jan: {
      label: 'Jan',
      type: 'jan',
      apiUrl: 'http://localhost:1337/v1', // Default Jan port
      apiKey: '', // Jan typically doesn't need an API key
      enabled: true,
      models: [],
      isLocal: true,
      status: 'pending',
    },
  },
  selectedModel: null, // No model selected initially
  general: {
    theme: 'system',
  },
  // Add other top-level keys from UserConfig if they exist and need defaults
};


export function useSettingsManager() {
  const [userConfig, setUserConfig] = useState<UserConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- Extract local provider configs for status checking ---
  const localProviders = userConfig?.providers
    ? Object.entries(userConfig.providers)
        .filter(([, config]) => config.isLocal)
        .map(([id, config]) => ({ id, ...config } as LocalProviderConfig & { id: string })) // Cast and add id
    : [];

  // --- Use the dedicated hook for provider statuses ---
  const {
    statuses: providerStatuses, // Renamed from localStatuses
    refreshStatuses,
    loading: statusesLoading, // Renamed from loadingStatuses
  } = useProviderStatus(localProviders);

  // --- Load initial configuration ---
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    sendMessage('loadConfiguration', null) // Assuming no data needed for load
      .then((loadedConfig) => {
        // Merge loaded config with defaults to ensure all fields are present
        const mergedConfig = {
          ...defaultConfigs,
          ...(loadedConfig || {}),
          providers: {
            ...defaultConfigs.providers,
            ...(loadedConfig?.providers || {}),
          },
          general: {
            ...defaultConfigs.general,
            ...(loadedConfig?.general || {}),
          }
        };
        setUserConfig(mergedConfig);
      })
      .catch((err) => {
        console.error('Error loading configuration:', err);
        setError('Failed to load configuration.');
        setUserConfig(defaultConfigs); // Fallback to defaults on error
      })
      .finally(() => setIsLoading(false));
  }, []);

  // --- Update provider statuses in the main userConfig state ---
  useEffect(() => {
    if (!userConfig || Object.keys(providerStatuses).length === 0) return;

    setUserConfig((prevConfig) => {
      if (!prevConfig) return null;
      let changesMade = false;
      const updatedProviders = { ...prevConfig.providers };

      Object.entries(providerStatuses).forEach(([providerId, status]) => {
        if (updatedProviders[providerId] && updatedProviders[providerId].status !== status) {
          updatedProviders[providerId] = {
            ...updatedProviders[providerId],
            status: status,
          };
          changesMade = true;
        }
      });

      return changesMade ? { ...prevConfig, providers: updatedProviders } : prevConfig;
    });
  }, [providerStatuses]); // Depend only on providerStatuses


  // --- Save configuration ---
  const saveConfig = useCallback((newConfig: UserConfig) => {
    setUserConfig(newConfig); // Optimistic update
    // Convert to JSON string for messaging
    try {
       const configJson = JSON.stringify(newConfig);
       sendMessage('saveConfiguration', { configJson })
         .catch((err) => {
           console.error('Error saving configuration:', err);
           setError('Failed to save configuration.');
           // TODO: Consider reverting optimistic update or notifying user
         });
    } catch (err) {
        console.error("Error stringifying config:", err);
        setError('Internal error preparing configuration for saving.');
    }
  }, []);


  // --- Configuration update handler (e.g., for individual provider changes) ---
 const handleConfigChange = useCallback(
    <K extends keyof UserConfig>(key: K, value: UserConfig[K]) => {
      setUserConfig((prevConfig) => {
        if (!prevConfig) return null; // Should not happen if loaded
        const updatedConfig = { ...prevConfig, [key]: value };
        saveConfig(updatedConfig); // Trigger save on change
        return updatedConfig;
      });
    },
    [saveConfig] // Include saveConfig dependency
  );

  // --- Individual provider update ---
 const updateProviderConfig = useCallback(
    (providerId: string, newProviderData: Partial<UserConfig['providers'][string]>) => {
      setUserConfig((prevConfig) => {
        if (!prevConfig || !prevConfig.providers[providerId]) return prevConfig;

        const updatedProviders = {
          ...prevConfig.providers,
          [providerId]: {
            ...prevConfig.providers[providerId],
            ...newProviderData,
          },
        };
        const updatedConfig = { ...prevConfig, providers: updatedProviders };
        saveConfig(updatedConfig); // Save the updated config
        return updatedConfig;
      });
    },
    [saveConfig]
  );

  // --- Refresh specific provider status ---
  const refreshProviderStatus = useCallback((providerId: string) => {
      const provider = localProviders.find(p => p.id === providerId);
      if (provider) {
          // Call the refresh function from useProviderStatus for the specific provider
          // Assuming refreshStatuses can take an ID or you might need to adjust useProviderStatus
          // For now, let's assume it refreshes all, which is less efficient but functional
          refreshStatuses();
      }
  }, [localProviders, refreshStatuses]);


  return {
    config: userConfig,
    isLoading: isLoading || statusesLoading, // Combine loading states
    error,
    handleConfigChange,
    updateProviderConfig,
    refreshProviderStatus,
    refreshAllStatuses: refreshStatuses, // Expose the hook's refresh function
  };
} 