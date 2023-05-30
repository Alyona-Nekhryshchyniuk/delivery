import { Route, Routes } from 'react-router-dom';
import { useState, lazy } from 'react';
import SharedLayout from './SharedLayout';
import ShopPage from 'pages/ShopPage';

const ShoppingCartPage = lazy(() => {
  import('pages/ShoppingCartPage');
});

export const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage setCart={setCart} />} />
          <Route path="cart" element={<ShoppingCartPage cart={cart} />} />
        </Route>
      </Routes>
    </div>
  );
};
