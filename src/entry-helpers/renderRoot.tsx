import React from 'react';
import ReactDOM from 'react-dom/client';
// Update import path for OnboardingRouter relative to src/entry-helpers/
import OnboardingRouter from '../../entrypoints/onboarding/OnboardingRouter'; 
// Adjust path to index.css relative to src/entry-helpers/
import "../index.css"; 

// Removed i18next setup - will use browser.i18n directly

// Revert to direct rendering at the top level
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* Render the router instead of a specific page */}
      <OnboardingRouter /> 
    </React.StrictMode>,
  );
  console.log(`[main.tsx] React app rendered into #root`);
} else {
  // Only log error in browser environment where document should exist
  if (typeof window !== 'undefined') {
    console.error(`[main.tsx] Could not find element with ID 'root' to render React app.`);
  }
}

// Remove the defineUnlistedScript wrapper and window attachment
/*
export default defineUnlistedScript(() => {
  console.log('[main.tsx] Module loaded via defineUnlistedScript wrapper.');
  // @ts-ignore - Allow adding property to window
  window.renderSettingsApp = renderSettingsApp;
});
*/

// Previous log is now inside the defineUnlistedScript callback
// console.log('[main.tsx] Module loaded, renderSettingsApp function defined.'); 