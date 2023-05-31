import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm/UserForm';
import Cart from '../components/Cart/Cart';
import EmptyCart from '../components/EmptyCart';

const ShoppingCartPage = ({ cart, setCart }) => {
  return (
    <div>
      <UserForm />
      {cart.length ? <Cart cart={cart} setCart={setCart} /> : <EmptyCart />}
    </div>
  );
};
export default ShoppingCartPage;
