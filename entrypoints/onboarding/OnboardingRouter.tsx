import React, { useState, useCallback } from 'react';
import browser from 'webextension-polyfill'; // Import browser API
import OnInstallPage from './OnInstallPage'; // The manual provider selection page
import ModelSelectionPage from './ModelSelectionPage'; // The next step
// Import the payload type from ModelSelectionPage
import { type SelectionPayload } from './ModelSelectionPage';
// Import the REFFACTORED db utility
import { execDb, queryDb } from '../../utils/db'; 

// Removed the placeholder detection component
// const LLMDetectionPlaceholder: React.FC<{...}> = ...;

// Revert steps back to original state before detection was added
type OnboardingStep = 'provider-selection' | 'model-selection' | 'complete'; 

function OnboardingRouter() {
  // Start directly with provider selection
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('provider-selection'); 
  const [savedConfig, setSavedConfig] = useState<any>(null);
  const [error, setError] = useState<string | null>(null); 

  // Removed handleDetectionComplete callback
  // const handleDetectionComplete = useCallback(...);

  // Handler for manual provider selection (this is the primary path now)
  const handleProviderSelected = useCallback((config: any) => {
    console.log("OnboardingRouter: Provider selected manually:", config);
    setError(null); 
    setSavedConfig(config);
    setCurrentStep('model-selection');
  }, []);

  // Update callback to be async and handle saving/closing
  const handleModelSelected = useCallback(async (payload: SelectionPayload) => {
    console.log("OnboardingRouter: Model selection confirmed:", payload);
    setError(null); 
    // Combine the config from manual selection with the model selection
    const fullConfig = { 
        ...savedConfig, 
        ...payload     
    };

    console.log("OnboardingRouter: Saving full configuration:", fullConfig);

    try {
      const configJson = JSON.stringify(fullConfig);

      // --- Manual UPSERT logic --- 
      console.log('[OnboardingRouter] Checking for existing configuration...');
      const selectSql = `SELECT id FROM user_configuration WHERE id = $1;`;
      const existingConfig = await queryDb(selectSql, [1]); // Use queryDb

      if (existingConfig && existingConfig.length > 0) {
        // --- UPDATE existing config --- 
        console.log('[OnboardingRouter] Existing configuration found. Updating...');
        const updateSql = `
          UPDATE user_configuration 
          SET config_json = $1, updated_at = CURRENT_TIMESTAMP 
          WHERE id = $2;
        `; 
        await queryDb(updateSql, [configJson, 1]); 
        console.log('[OnboardingRouter] Update successful.');
      } else {
        // --- INSERT new config --- 
        console.log('[OnboardingRouter] No existing configuration found. Inserting...');
        const insertSql = `
          INSERT INTO user_configuration (id, config_json, updated_at)
          VALUES ($1, $2, CURRENT_TIMESTAMP);
        `; 
        await queryDb(insertSql, [1, configJson]); 
        console.log('[OnboardingRouter] Insert successful.');
      }
      // --------------------------

      console.log("OnboardingRouter: Configuration saved successfully.");

      // --- Proceed to open new tab and close current one --- 
      const currentTab = await browser.tabs.getCurrent();
      if (currentTab?.id) {
        console.log(`OnboardingRouter: Opening new tab page...`);
        await browser.tabs.create({ url: browser.runtime.getURL("/newtab.html") });
        console.log(`OnboardingRouter: Closing onboarding tab ${currentTab.id}...`);
        await browser.tabs.remove(currentTab.id);
      }

    } catch (dbError: any) { 
        console.error("OnboardingRouter: Error saving configuration:", dbError);
        setError(`Failed to save configuration: ${dbError.message || String(dbError)}`);
        // Stay on model-selection page if error occurs during save
        setCurrentStep('model-selection'); 
    }
    
  }, [savedConfig]); // Dependency remains savedConfig

  // Render the component for the current step
  switch (currentStep) {
    // Removed 'llm-detection' case
    case 'provider-selection': // This is now the first step again
      return <OnInstallPage onSetupComplete={handleProviderSelected} />;
    case 'model-selection':
      // Ensure savedConfig is not null before rendering
      if (!savedConfig) {
          // If somehow navigated here without config, redirect to start
          console.warn("ModelSelectionPage rendered without savedConfig. Redirecting to provider selection.");
          setCurrentStep('provider-selection'); // Redirect back to start if config is missing
          return <div>Redirecting...</div>; 
      }
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
      return <div>Invalid onboarding step: {currentStep}</div>;
  }
}

export default OnboardingRouter; 