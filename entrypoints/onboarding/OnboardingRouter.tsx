import React, { useState, useCallback } from 'react';
import OnInstallPage from './OnInstallPage'; // Renamed, corresponds to provider selection
import ModelSelectionPage from './ModelSelectionPage'; // The next step
// Import the payload type from ModelSelectionPage
import { type SelectionPayload } from './ModelSelectionPage';

type OnboardingStep = 'provider-selection' | 'model-selection';

function OnboardingRouter() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('provider-selection');
  // Store the saved config to pass to the next step
  const [savedConfig, setSavedConfig] = useState<any>(null); 
  // Store the full selection payload
  const [modelSelection, setModelSelection] = useState<SelectionPayload | null>(null);

  // Callback for OnInstallPage to call when config is saved
  const handleProviderSelected = useCallback((config: any) => {
    console.log("OnboardingRouter: Provider selected:", config);
    setSavedConfig(config);
    setCurrentStep('model-selection');
  }, []);

  // Update callback to accept SelectionPayload
  const handleModelSelected = useCallback((payload: SelectionPayload) => {
    console.log("OnboardingRouter: Model selection confirmed:", payload);
    setModelSelection(payload); // Store the full payload
    // TODO: Save the payload (chatModel, embeddingModel) to storage
    // TODO: Close tab or navigate elsewhere?
    alert(`Chat: ${payload.chatModel}, Embed: ${payload.embeddingModel || 'N/A'}`); // Simple alert for now
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