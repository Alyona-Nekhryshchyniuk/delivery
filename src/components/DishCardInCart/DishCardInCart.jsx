import { useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';

const DishCardInCart = ({ dish }) => {
  const { dishName, type, imageURL, price } = dish;

  const { setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer, dish.amount);

  return (
    <>
      <div>
        <img src={imageURL} />
        <h3>{dishName}</h3>
        <span>Type: {type}</span>
        <span>Price: {price}UAH</span>
        <span>Quantity:{amount}</span>

        <button
          type="button"
          onClick={() => {
            setCart({ type: 'increment', payload: dish });

            setAmount({ type: 'increment' });
          }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => {
            dish.amount > 2
              ? setCart({ type: 'remove', payload: dish })
              : setCart({ type: 'decrement', payload: dish });

            setAmount({
              type: 'decrement',
            });
          }}
        >
          -1
        </button>
        <button
          type="button"
          onClick={() => setCart({ type: 'remove', payload: dish })}
        >
          Remove
        </button>
      </div>
    </>
  );
};
export default DishCardInCart;
