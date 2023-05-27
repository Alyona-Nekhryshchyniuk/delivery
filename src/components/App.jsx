import { Route, Routes } from 'react-router-dom';
import ShopPage from 'pages/ShopPage';
import ShoppingCartPage from 'pages/ShoppingCartPage';
import SharedLayout from './SharedLayout';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </div>
  );
};
