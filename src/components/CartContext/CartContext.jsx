import { createContext, useReducer, useState } from 'react';
import { cartReducer } from '../../helpers/cartReducer';

const context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useReducer(cartReducer, []);

  return (
    <context.Provider value={{ cart, setCart }}>{children}</context.Provider>
  );
};

export { context };
export default CartContext;
