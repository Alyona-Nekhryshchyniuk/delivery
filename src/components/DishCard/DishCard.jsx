import { useState } from 'react';

const DishCard = ({ setCart, dish }) => {
  const { imageURL, dishName, type, price } = dish;
  // const clickHandle = e => {
  //   setCart(cartContent => [...cartContent, dish]);
  // };

  const [amount, setAmount] = useState(dish.amount ?? 0);

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
  };

  return (
    <div>
      <img src={imageURL} />
      <h3>{dishName}</h3>
      <span>Type: {type}</span>
      <span>Price: {price}UAH</span>
      {!amount ? (
        <button
          onClick={e => {
            setAmount(1);
            setCart(cartContent => [...cartContent, { ...dish, amount: 1 }]);
          }}
        >
          Add to cart
        </button>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
export default DishCard;
