import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import Router from './components/Router';
import { CartProvider } from './components/Cart/CartProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* Оберните Router в CartProvider */}
      <Router />
    </CartProvider>
  </React.StrictMode>,
);
