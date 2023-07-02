import UserForm from '../components/UserForm/UserForm';

import EmptyCart from '../components/Shared/EmptyCart';
import { ChakraProvider, theme } from '@chakra-ui/react';

import useMyContext from '../helpers/useMyContext';

const ShoppingCartPage = ({ chosenShop }) => {
  const { cart } = useMyContext();

  return (
    <div>
      <ChakraProvider theme={theme}>
        {cart.length ? <UserForm chosenShop={chosenShop} /> : <EmptyCart />}
      </ChakraProvider>
    </div>
  );
};
export default ShoppingCartPage;
