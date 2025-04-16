import React, { useState, useCallback } from 'react';
import OnInstallPage from './OnInstallPage'; // Renamed, corresponds to provider selection
import ModelSelectionPage from './ModelSelectionPage'; // The next step

type OnboardingStep = 'provider-selection' | 'model-selection';

function OnboardingRouter() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('provider-selection');
  // Store the saved config to pass to the next step
  const [savedConfig, setSavedConfig] = useState<any>(null); 

  // Callback for OnInstallPage to call when config is saved
  const handleProviderSelected = useCallback((config: any) => {
    console.log("OnboardingRouter: Provider selected:", config);
    setSavedConfig(config);
    setCurrentStep('model-selection');
  }, []);

  // Callback for ModelSelectionPage to call when model is saved
  const handleModelSelected = useCallback(() => {
    console.log("OnboardingRouter: Model selected. Onboarding complete?");
    // TODO: Close tab or navigate elsewhere?
    // For now, just log.
  }, []);

  // Render the component for the current step
  switch (currentStep) {
    case 'provider-selection':
      return <OnInstallPage onConfigSaved={handleProviderSelected} />;
    case 'model-selection':
      // Pass the saved provider config and the completion handler
      return <ModelSelectionPage 
               providerConfig={savedConfig} 
               onSelectionConfirmed={handleModelSelected} 
             />;
    default:
      // Fallback or error state?
      return <div>Invalid onboarding step</div>;
  }
}

export default OnboardingRouter; 