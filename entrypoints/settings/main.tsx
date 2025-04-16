import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './SettingsApp.tsx';
import '../../src/index.css'; // Adjust path if your global CSS is elsewhere

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 