import { useEffect, useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';
import Buttons from 'components/Buttons/Buttons';
import css from './dishCard.module.scss';

const DishCard = ({ dish }) => {
  const { imageURL, dishName, type, price } = dish;

  const { cart, setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer);

  useEffect(() => {
    setAmount({ type: 'mount', payload: { cart, dish } });
  }, []);

  return (
    <div className={css.dishCardContainer}>
      <img src={imageURL} />
      <h3 className={css.dishName}>{dishName}</h3>
      <p className={css.dishType}>Type: {type}</p>
      <p className={css.price}>Price: {price}UAH</p>
      {!cart.some(d => d.dishName === dish.dishName) ? (
        <button
          onClick={() => {
            setCart({ type: 'first increment', payload: dish });
            setAmount({ type: 'increment' });
          }}
        >
          Add to cart
        </button>
      ) : (
        <>
          <p>Quantity:{amount}</p>
          <Buttons
            setCart={setCart}
            setAmount={setAmount}
            amount={amount}
            dish={dish}
          />
        </>
      )}
    </div>
  );
};
export default DishCard;
