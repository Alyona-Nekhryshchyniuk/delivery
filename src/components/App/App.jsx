import { Route, Routes } from 'react-router-dom';
import { useState, lazy, useContext, useEffect } from 'react';
import SharedLayout from '../Shared/SharedLayout';
import ShopPage from 'pages/ShopPage';
import CartContext from '../CartContext/CartContext';
import { createdContext } from '../CartContext/CartContext';
import css from './app.module.scss';
const ShoppingCartPage = lazy(() => import('pages/ShoppingCartPage'));

export const App = () => {
  const [chosenShop, setChosenShop] = useState('vilkipalki');

  return (
    <div className={css.appContainer}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <ShopPage chosenShop={chosenShop} setChosenShop={setChosenShop} />
            }
          />
          <Route
            path="cart"
            element={<ShoppingCartPage chosenShop={chosenShop} />}
          />
        </Route>
      </Routes>
    </div>
  );
};
