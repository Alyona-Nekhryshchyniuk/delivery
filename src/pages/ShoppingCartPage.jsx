import UserForm from '../components/UserForm/UserForm';
import Cart from '../components/Cart/Cart';
import EmptyCart from '../components/Shared/EmptyCart';
import css from '../components/UserForm/userForm.module.scss';
import { ChakraProvider, theme } from '@chakra-ui/react';

import useMyContext from '../helpers/useMyContext';

const ShoppingCartPage = ({ chosenShop }) => {
  const { cart } = useMyContext();

  return (
    <div>
      <ChakraProvider theme={theme}>
        {cart.length ? <UserForm chosenShop={chosenShop} /> : <EmptyCart />}
      </ChakraProvider>
      {/* {cart.length ? <Cart /> : <EmptyCart />} */}
    </div>
  );
};
export default ShoppingCartPage;
