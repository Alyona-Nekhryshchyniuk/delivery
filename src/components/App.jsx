import { Route, Routes } from 'react-router-dom';
import { useState, lazy, useContext, useEffect } from 'react';
import SharedLayout from './SharedLayout';
import ShopPage from 'pages/ShopPage';
import CartContext from './CartContext/CartContext';
import { createdContext } from '../components/CartContext/CartContext';
const ShoppingCartPage = lazy(() => import('pages/ShoppingCartPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage cart={cart} setCart={setCart} />} />
          <Route
            path="cart"
            element={<ShoppingCartPage setCart={setCart} cart={cart} />}
          />
        </Route>
      </Routes> */}
    </div>
  );
};
