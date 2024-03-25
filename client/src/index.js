import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './components/ui/theme-provider'
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
      < App />
    </ThemeProvider>
  </React.StrictMode>
);
