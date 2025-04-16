import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import '../../src/index.css'; // Import global styles/tailwind using relative path

// Find the root element (defined in index.html)
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount React app");
}

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 