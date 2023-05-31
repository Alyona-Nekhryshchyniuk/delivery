import { useState } from 'react';

const DishCardInCart = ({ dish, setTotal, setCart, cart }) => {
  const { dishName, type, imageURL, price } = dish;

  const [amount, setAmount] = useState(dish.amount);

  const removeDishFromCartHandle = e => {
    setCart(prev => {
      const ind = prev.indexOf(dish);
      const copy = [...prev];
      copy.splice(ind, 1);
      return copy;
    });
  };

  const amountChangehandle = e => {
    if (e.target.innerHTML === '+1') {
      setAmount(prev => (prev += 1));
      setCart(cartContent => {
        return [...cartContent].map(
          d => d.name === dish.name && { ...d, amount: ++d.amount }
        );
      });
      return;
    }

    setAmount(prev => (prev -= 1));
    setCart(cartContent => {
      return [...cartContent].map(
        d => d.name === dish.name && { ...d, amount: --d.amount }
      );
    });

    // if (e.target.innerHTML === '+1') {
    //   setTotal(prevTotal => (prevTotal += price));
    //   setAmount(prev => (prev += 1));
    //   return;
    // }
    // setTotal(prevTotal => (prevTotal -= price));
    // setAmount(prev => (prev -= 1));
  };

  return (
    <>
      <div>
        <img src={imageURL} />
        <h3>{dishName}</h3>
        <span>Type: {type}</span>
        <span>Price: {price}UAH</span>
        <span>Quantity:{amount}</span>

        <button type="button" onClick={amountChangehandle}>
          +1
        </button>
        <button type="button" onClick={amountChangehandle}>
          -1
        </button>
        <button type="button" onClick={removeDishFromCartHandle}>
          Remove
        </button>
      </div>
    </>
  );
};
export default DishCardInCart;
