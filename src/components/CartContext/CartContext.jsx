import { createContext, useReducer, useState } from 'react';
import { cartReducer } from '../../helpers/cartReducer';

const context = createContext();

const CartContext = ({ children }) => {
  let stored = localStorage.getItem('cart');
  const initCart = stored ? JSON.parse(stored) : [];

  const [cart, setCart] = useReducer(cartReducer, initCart);

  return (
    <context.Provider value={{ cart, setCart }}>{children}</context.Provider>
  );
};

export { context };
export default CartContext;
