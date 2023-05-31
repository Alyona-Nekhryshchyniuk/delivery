import DishCardInCart from '../DishCardInCart/DishCardInCart';
import { useEffect, useState } from 'react';

const Cart = ({ cart, setCart }) => {
  // const [total, setTotal] = useState(() => {
  //   let fullPrice = 0;
  //   cart.forEach(dishObj => (fullPrice += +dishObj.price));
  //   return fullPrice;
  // });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => {
      let sum = 0;
      cart.map(dish => (sum += dish.amount * dish.price));
      return sum;
    });
  }, [cart]);

  const submitHandle = e => {
    console.log(cart);
  };

  return (
    <>
      <section>
        <ul>
          {cart.map(dish => (
            <DishCardInCart
              key={dish._id}
              dish={dish}
              // setTotal={setTotal}
              setCart={setCart}
              cart={cart}
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
