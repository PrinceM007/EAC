import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global custom styles
import App from './App.jsx'; // Main App component

// Bootstrap & Icons styles for a polished UI
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

// Rendering the App component to the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
