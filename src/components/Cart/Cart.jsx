import DishCardInCart from '../DishCardInCart/DishCardInCart';
import { useState } from 'react';

const Cart = ({ cart }) => {
  const [total, setTotal] = useState('');
  const submitHandle = e => {
    console.log(cart);
  };

  return (
    <>
      <section>
        <ul>
          {cart.map(dishObj => (
            <DishCardInCart
              key={dishObj.id}
              dishInCart={dishObj}
              setTotal={setTotal}
            />
          ))}
        </ul>
      </section>
      <span> Total prize: {total}</span>
      <button type="Submit" onClick={submitHandle}>
        {' '}
        Submit
      </button>
    </>
  );
};
export default Cart;
