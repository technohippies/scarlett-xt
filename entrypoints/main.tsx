import React from 'react';
import ReactDOM from 'react-dom/client';
// Update import path for OnboardingRouter
import OnboardingRouter from './onboarding/OnboardingRouter'; 
import "../src/index.css"; // Update relative path to global styles

// Removed i18next setup - will use browser.i18n directly

// Define the function WITHOUT exporting it directly
function renderSettingsApp(elementId: string = 'root') {
  const rootElement = document.getElementById(elementId);
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        {/* Render the router instead of a specific page */}
        <OnboardingRouter /> 
      </React.StrictMode>,
    );
    console.log(`[main.tsx] React app rendered into #${elementId}`);
  } else {
    console.error(`[main.tsx] Could not find element with ID '${elementId}' to render React app.`);
  }
}

// Wrap the module's logic in defineUnlistedScript for WXT
export default defineUnlistedScript(() => {
  console.log('[main.tsx] Module loaded via defineUnlistedScript wrapper.');
  
  // Attach the function to the window object so HTML can call it
  // @ts-ignore - Allow adding property to window
  window.renderSettingsApp = renderSettingsApp;
});

// Previous log is now inside the defineUnlistedScript callback
// console.log('[main.tsx] Module loaded, renderSettingsApp function defined.'); 