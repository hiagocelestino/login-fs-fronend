import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PaginaPrincipal from './pages/PaginaPrincipal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PaginaPrincipal />
  </React.StrictMode>
);
