import React, { useState, useCallback } from 'react';
import browser from 'webextension-polyfill'; // Import browser API
import OnInstallPage from './OnInstallPage'; // Renamed, corresponds to provider selection
import ModelSelectionPage from './ModelSelectionPage'; // The next step
// Import the payload type from ModelSelectionPage
import { type SelectionPayload } from './ModelSelectionPage';
// Import the database utility
import { execDb } from '../../utils/db';

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
    setError(null); // Clear previous errors

    // Combine provider config and model selection
    const fullConfig = { 
        ...savedConfig, // provider, endpoint, apiKey? 
        ...payload     // chatModel, embeddingModel
    };

    console.log("OnboardingRouter: Saving full configuration to DB:", fullConfig);

    try {
      const configJson = JSON.stringify(fullConfig);
      const sql = `
        INSERT INTO user_configuration (id, config_json, updated_at)
        VALUES (1, $1, CURRENT_TIMESTAMP)
        ON CONFLICT (id) DO UPDATE SET 
            config_json = EXCLUDED.config_json,
            updated_at = CURRENT_TIMESTAMP;
      `;
      await execDb(sql, [configJson]);
      console.log("OnboardingRouter: Configuration saved successfully.");

      // Optional: Move to a simple complete step before closing?
      // setCurrentStep('complete'); 
      // For now, just close the tab directly
      const currentTab = await browser.tabs.getCurrent();
      if (currentTab?.id) {
        console.log(`OnboardingRouter: Closing onboarding tab ${currentTab.id}...`);
        await browser.tabs.remove(currentTab.id);
      }

    } catch (dbError: any) { // Catch potential DB errors
        console.error("OnboardingRouter: Error saving configuration to database:", dbError);
        setError(`Failed to save configuration: ${dbError.message || String(dbError)}`);
        // Don't close the tab on error, stay on model selection page
    }
    
  }, [savedConfig]); // Need savedConfig in dependency array

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