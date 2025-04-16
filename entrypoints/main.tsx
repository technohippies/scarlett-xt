import React from 'react';
import ReactDOM from 'react-dom/client';
// Update import path for OnboardingRouter
import OnboardingRouter from './onboarding/OnboardingRouter'; 
import "../src/index.css"; // Update relative path to global styles

// Removed i18next setup - will use browser.i18n directly

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Render the router instead of a specific page */}
    <OnboardingRouter /> 
  </React.StrictMode>,
); 