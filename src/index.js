import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.jsx';
import './index.css';
import CartContext from 'components/CartContext/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/delivery">
    <CartContext>
      <App />
    </CartContext>
  </BrowserRouter>
  </React.StrictMode>
);
