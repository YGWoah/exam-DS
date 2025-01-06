// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ProviderWrapper from './ProvicesWrapper.tsx';

// TOFIX : STRICT CAUSES THE PROBLEM OF : keycloack can only be initialized once

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ProviderWrapper />
  // </StrictMode>
);
