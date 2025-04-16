import React from 'react';
import ReactDOM from 'react-dom/client';
// We don't need OnboardingRouter here anymore
// import OnboardingRouter from '../../entrypoints/onboarding/OnboardingRouter'; 
// Keep the CSS import relative to this file
import "../index.css"; 

// Define and EXPORT the renderRoot function
export function renderRoot(element: React.ReactElement) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        {element} {/* Render the provided element */}
      </React.StrictMode>,
    );
    console.log(`[renderRoot] React app rendered into #root`);
  } else {
    // Only log error in browser environment where document should exist
    if (typeof window !== 'undefined') {
      console.error(`[renderRoot] Could not find element with ID 'root' to render React app.`);
    }
  }
}

// Remove the previous direct rendering logic
/*
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <OnboardingRouter /> 
    </React.StrictMode>,
  );
  console.log(`[main.tsx] React app rendered into #root`);
} else {
  if (typeof window !== 'undefined') {
    console.error(`[main.tsx] Could not find element with ID 'root' to render React app.`);
  }
}
*/

// Remove the old defineUnlistedScript and window attachment
/*
export default defineUnlistedScript(() => {
  console.log('[main.tsx] Module loaded via defineUnlistedScript wrapper.');
  // @ts-ignore - Allow adding property to window
  window.renderSettingsApp = renderSettingsApp;
});
*/

// Previous log is now inside the defineUnlistedScript callback
// console.log('[main.tsx] Module loaded, renderSettingsApp function defined.'); 