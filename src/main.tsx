import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirstSection } from './components/first-section';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstSection />
  </StrictMode>,
)
