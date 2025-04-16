import React from 'react';
import ReactDOM from 'react-dom/client';
import ModelSelectionPage from './ModelSelectionPage';
import "../../src/index.css"; // Use relative path to global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModelSelectionPage />
  </React.StrictMode>,
); 