import { useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';
import Buttons from '../Buttons/Buttons';
import sepCss from './cardInCart.module.scss';
import css from '../card.module.scss';

const DishCardInCart = ({ dish }) => {
  const { dishName, type, imageURL, price } = dish;

  const { setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer, dish.amount);

  return (
    <div className={sepCss.dishCardContainer}>
      <div className={sepCss.imgContainer}>
        {' '}
        <img src={imageURL} className={css.img} />
      </div>
      <div className={css.cardTextContainer}>
        {' '}
        <h3 className={css.dishName}>{dishName}</h3>
        <p>Type: {type}</p>
        <p>
          Price: <span className={css.highlighted}>{price}UAH</span>
        </p>
        <p>
          Quantity: <span className={css.highlighted}>{amount}</span>
        </p>
      </div>

      <Buttons
        setCart={setCart}
        setAmount={setAmount}
        amount={amount}
        dish={dish}
      />
    </div>
  );
};
export default DishCardInCart;
