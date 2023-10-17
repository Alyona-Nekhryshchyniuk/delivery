import { createContext, useReducer } from 'react';
import { cartReducer } from '../../helpers/cartReducer';

const context = createContext();
console.log('context');
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
