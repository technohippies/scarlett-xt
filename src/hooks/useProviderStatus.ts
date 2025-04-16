import { useState, useEffect, useCallback, useRef } from 'react';

// Define provider configurations and types within the hook or import from a shared types file
export interface LocalProviderConfig {
  id: string;
  name: string;
  logo: string;
  endpoint: string;
  checkPath: string; // Path to check for status (e.g., /models, /version)
  checkMethod?: string; // Usually GET
}

export const localProvidersConfig: LocalProviderConfig[] = [
  {
    id: 'ollama',
    name: 'Ollama',
    logo: '/images/ollama.png',
    endpoint: 'http://localhost:11434',
    checkPath: '/api/version' 
  },
  {
    id: 'lmstudio',
    name: 'LMStudio',
    logo: '/images/lmstudio.png',
    endpoint: 'http://localhost:1234',
    checkPath: '/v1/models' 
  },
  {
    id: 'janai',
    name: 'Jan.ai',
    logo: '/images/jan.png',
    endpoint: 'http://127.0.0.1:1337',
    checkPath: '/v1/models' 
  },
];

export type LocalStatus = 'checking' | 'connected' | 'error' | 'not-running';

export const useProviderStatus = () => {
  const [statuses, setStatuses] = useState<Record<string, LocalStatus>>(
    Object.fromEntries(localProvidersConfig.map(p => [p.id, 'checking']))
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkProviderStatus = useCallback(async (provider: LocalProviderConfig) => {
    let shouldProceed = true;
    
    // Use functional update to get the latest status and decide whether to proceed
    setStatuses(prev => {
        const currentStatus = prev[provider.id];
        if (currentStatus === 'connected') {
          shouldProceed = false; // Already connected, don't proceed
          return prev; // No state change needed
        }
        // Set to checking if not already checking
        if (currentStatus !== 'checking') {
            console.log(`Setting ${provider.name} to checking...`);
            return { ...prev, [provider.id]: 'checking' };
        }
        return prev; // No state change needed if already checking
    });

    // If the status was already 'connected' inside the setter, exit early
    if (!shouldProceed) {
      console.log(`${provider.name} is already connected, skipping check.`);
      return { id: provider.id, status: 'connected' };
    }

    // Proceed with the actual check
    console.log(`Checking status for ${provider.name}...`);
    try {
      const response = await fetch(`${provider.endpoint}${provider.checkPath}`, {
        method: provider.checkMethod || 'GET',
        signal: AbortSignal.timeout(3000) 
      });

      const newStatus: LocalStatus = response.ok ? 'connected' : 'error';
      if(response.ok) console.log(`${provider.name} detected!`);
      else console.log(`${provider.name} responded but not OK: ${response.status}`);
      
      setStatuses(prev => ({ ...prev, [provider.id]: newStatus }));
      return { id: provider.id, status: newStatus };

    } catch (error) {
      console.log(`Error checking ${provider.name}:`, error);
      setStatuses(prev => ({ ...prev, [provider.id]: 'not-running' }));
      return { id: provider.id, status: 'not-running' };
    }
  }, []);

  // Effect for initial check and polling
  useEffect(() => {
    console.log("[useProviderStatus] Running initial checks...");
    localProvidersConfig.forEach(provider => checkProviderStatus(provider));

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      console.log("[useProviderStatus] Polling providers...");
      setStatuses(currentStatuses => {
        localProvidersConfig.forEach(provider => {
          if (currentStatuses[provider.id] !== 'connected') {
            checkProviderStatus(provider);
          }
        });
        return currentStatuses;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) {
        console.log("[useProviderStatus] Clearing polling interval.");
        clearInterval(intervalRef.current);
      }
    };
  }, [checkProviderStatus]);

  return { statuses, checkProviderStatus, providers: localProvidersConfig };
}; 