import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HeaderAndFooter from './components/Header/HeaderAndFooter.jsx';
import Home from './components/Header/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderAndFooter />
    <Home />
  </StrictMode>,
);