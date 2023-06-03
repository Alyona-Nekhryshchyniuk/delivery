import UserForm from '../components/UserForm/UserForm';
import Cart from '../components/Cart/Cart';
import EmptyCart from '../components/EmptyCart';

import useMyContext from '../helpers/useMyContext';

const ShoppingCartPage = () => {
  const { cart } = useMyContext();

  return (
    <div>
      <UserForm />
      {cart.length ? <Cart /> : <EmptyCart />}
    </div>
  );
};
export default ShoppingCartPage;
