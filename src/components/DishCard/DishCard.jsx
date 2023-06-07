import { useEffect, useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';
import Buttons from 'components/Buttons/Buttons';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import seperateCss from './dishCard.module.scss';
import css from '../card.module.scss';

const DishCard = ({ dish }) => {
  const { imageURL, dishName, type, price } = dish;

  const { cart, setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer);

  useEffect(() => {
    setAmount({ type: 'mount', payload: { cart, dish } });
  }, []);

  return (
    <div className={seperateCss.dishCardContainer}>
      <div className={seperateCss.imgContainer}>
        {' '}
        <img src={imageURL} className={css.img} />
      </div>
      <h3 className={css.dishName}>{dishName}</h3>
      <p>Type: {type}</p>
      <p>
        Price: <span className={css.highlighted}>{price}UAH</span>
      </p>

      {!cart.some(d => d.dishName === dish.dishName) ? (
        <AddToCartButton
          text="Add to cart"
          onClick={() => {
            setCart({ type: 'first increment', payload: dish });
            setAmount({ type: 'increment' });
          }}
        />
      ) : (
        <>
          <p>
            Quantity: <span className={css.highlighted}>{amount}</span>
          </p>
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
