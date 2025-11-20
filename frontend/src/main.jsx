import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import VConsole from 'vconsole';

import App from './App.jsx';
import { AuthProvider } from './contexts/authcontext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

if (import.meta.env.DEV) {
  new VConsole();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);