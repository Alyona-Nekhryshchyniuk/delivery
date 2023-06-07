import UserForm from '../components/UserForm/UserForm';
import Cart from '../components/Cart/Cart';
import EmptyCart from '../components/EmptyCart';
import css from '../components/UserForm/userForm.module.scss';
import { ChakraProvider, theme } from '@chakra-ui/react';

import useMyContext from '../helpers/useMyContext';

const ShoppingCartPage = () => {
  const { cart } = useMyContext();

  return (
    <div className={css.shoppingCartPageContainer}>
      <ChakraProvider theme={theme}>
        <UserForm />
      </ChakraProvider>
      {cart.length ? <Cart /> : <EmptyCart />}
    </div>
  );
};
export default ShoppingCartPage;
