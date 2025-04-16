import React from 'react';
import ReactDOM from 'react-dom/client';
import OnInstallPage from './OnInstallPage'; // Import the main page component
import "../../src/index.css"; // Import global styles

// Removed i18next setup - will use browser.i18n directly

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OnInstallPage />
  </React.StrictMode>,
); 