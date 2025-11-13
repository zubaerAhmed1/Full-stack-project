import VConsole from "vconsole";
new VConsole();

import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/authcontext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx'; // 1. Notun Guard-ke import koro
import { enableConsoleOverlay } from "./utils/ConsoleOverlay";
enableConsoleOverlay();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    //<ErrorBoundary> 
      <AuthProvider> 
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
