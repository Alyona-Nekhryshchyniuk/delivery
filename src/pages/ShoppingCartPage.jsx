import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm/UserForm';
import Cart from '../components/Cart/Cart';

const ShoppingCartPage = ({ cart }) => {
  return (
    <div>
      <UserForm />
      <Cart cart={cart} />
    </div>
  );
};
export default ShoppingCartPage;
