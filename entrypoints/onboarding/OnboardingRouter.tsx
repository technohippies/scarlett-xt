import React, { useState, useCallback } from 'react';
import browser from 'webextension-polyfill'; // Import browser API
import OnInstallPage from './OnInstallPage'; // Renamed, corresponds to provider selection
import ModelSelectionPage from './ModelSelectionPage'; // The next step
// Import the payload type from ModelSelectionPage
import { type SelectionPayload } from './ModelSelectionPage';

type OnboardingStep = 'provider-selection' | 'model-selection' | 'complete'; // Add complete step

function OnboardingRouter() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('provider-selection');
  const [savedConfig, setSavedConfig] = useState<any>(null);
  // Removed modelSelection state, we'll save directly
  // const [modelSelection, setModelSelection] = useState<SelectionPayload | null>(null);
  const [error, setError] = useState<string | null>(null); // Add error state

  const handleProviderSelected = useCallback((config: any) => {
    console.log("OnboardingRouter: Provider selected:", config);
    setError(null); // Clear previous errors
    setSavedConfig(config);
    setCurrentStep('model-selection');
  }, []);

  // Update callback to be async and handle saving/closing
  const handleModelSelected = useCallback(async (payload: SelectionPayload) => {
    console.log("OnboardingRouter: Model selection confirmed:", payload);
    setError(null); 
    const fullConfig = { 
        ...savedConfig, 
        ...payload     
    };

    console.log("OnboardingRouter: Saving full configuration to chrome.storage.local:", fullConfig);

    try {
      // Save directly to chrome.storage.local
      await browser.storage.local.set({ userConfiguration: fullConfig });
      console.log("OnboardingRouter: Configuration saved successfully to chrome.storage.local.");

      // Add a small delay just in case storage needs a tick
      await new Promise(resolve => setTimeout(resolve, 50)); 

      // --- Proceed to open new tab and close current one --- 
      const currentTab = await browser.tabs.getCurrent();
      if (currentTab?.id) {
        console.log(`OnboardingRouter: Opening new tab page...`);
        await browser.tabs.create({ url: browser.runtime.getURL("/newtab.html") });
        console.log(`OnboardingRouter: Closing onboarding tab ${currentTab.id}...`);
        await browser.tabs.remove(currentTab.id);
      }

    } catch (storageError: any) { // Catch potential storage errors
        console.error("OnboardingRouter: Error saving configuration to chrome.storage.local:", storageError);
        setError(`Failed to save configuration: ${storageError.message || String(storageError)}`);
    }
    
  }, [savedConfig]);

  // Render the component for the current step
  switch (currentStep) {
    case 'provider-selection':
      return <OnInstallPage onConfigSaved={handleProviderSelected} />;
    case 'model-selection':
      // Pass the saved provider config and the completion handler
      return (
        <>
          <ModelSelectionPage 
              providerConfig={savedConfig} 
              onSelectionConfirmed={handleModelSelected} 
          />
          {/* Display error if saving fails */}
          {error && (
              <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded bg-red-100 p-4 text-red-700 shadow-md">
                  Error: {error}
              </div>
          )}
        </>
      );
    // Optional: Add a simple completion screen
    // case 'complete':
    //   return <div>Setup Complete! This tab will close shortly.</div>;
    default:
      // Fallback or error state?
      return <div>Invalid onboarding step</div>;
  }
}

export default OnboardingRouter; 