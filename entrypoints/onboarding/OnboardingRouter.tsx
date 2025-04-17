import React, { useState, useCallback } from 'react';
import browser from 'webextension-polyfill'; // Import browser API
import OnInstallPage from './OnInstallPage'; // Renamed, corresponds to provider selection
import ModelSelectionPage from './ModelSelectionPage'; // The next step
// Import the payload type from ModelSelectionPage
import { type SelectionPayload } from './ModelSelectionPage';
// Import the REFFACTORED db utility
import { execDb, queryDb } from '../../utils/db'; 

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

    console.log("OnboardingRouter: Saving full configuration:", fullConfig);

    try {
      const configJson = JSON.stringify(fullConfig);

      // --- Manual UPSERT logic --- 
      console.log('[OnboardingRouter] Checking for existing configuration...');
      const selectSql = `SELECT id FROM user_configuration WHERE id = ?;`;
      const existingConfig = await queryDb(selectSql, [1]); // Use queryDb

      if (existingConfig && existingConfig.length > 0) {
        // --- UPDATE existing config --- 
        console.log('[OnboardingRouter] Existing configuration found. Updating...');
        const updateSql = `
          UPDATE user_configuration 
          SET config_json = ?, updated_at = CURRENT_TIMESTAMP 
          WHERE id = ?;
        `;
        await execDb(updateSql, [configJson, 1]);
        console.log('[OnboardingRouter] Update successful.');
      } else {
        // --- INSERT new config --- 
        console.log('[OnboardingRouter] No existing configuration found. Inserting...');
        const insertSql = `
          INSERT INTO user_configuration (id, config_json, updated_at)
          VALUES (?, ?, CURRENT_TIMESTAMP);
        `;
        await execDb(insertSql, [1, configJson]);
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

    } catch (dbError: any) { // Catch potential DB or messaging errors
        console.error("OnboardingRouter: Error saving configuration:", dbError);
        setError(`Failed to save configuration: ${dbError.message || String(dbError)}`);
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