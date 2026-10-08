import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HeaderAndFooter from './components/Header/HeaderAndFooter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderAndFooter />
  </StrictMode>,
);