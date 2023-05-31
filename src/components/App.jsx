import { Route, Routes } from 'react-router-dom';
import { useState, lazy } from 'react';
import SharedLayout from './SharedLayout';
import ShopPage from 'pages/ShopPage';
import ShoppingCartPage from 'pages/ShoppingCartPage';

// const ShoppingCartPage = lazy(() => {
//   import('../pages/ShoppingCartPage');
// });

export const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage cart={cart} setCart={setCart} />} />
          <Route
            path="cart"
            element={<ShoppingCartPage setCart={setCart} cart={cart} />}
          />
        </Route>
      </Routes>
    </div>
  );
};
