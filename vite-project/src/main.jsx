import React from 'react';
import { createRoot } from 'react-dom/client'; // Only import createRoot
import App from './App';
import { StrictMode } from 'react'; // Import StrictMode from React
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
