import { useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';
import Buttons from '../Buttons/Buttons';
import sepCss from './cardInCart.module.scss';
import css from '../Shared/card.module.scss';

const DishCardInCart = ({ dish }) => {
  const { dishName, type, imageURL, price } = dish;

  const { setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer, dish.amount);

  return (
    <div className={sepCss.dishCardContainer}>
      <div className={sepCss.imgContainer}>
        {' '}
        <img src={imageURL} className={css.img} alt='dish'/>
      </div>{' '}
      <h3 className={css.dishName}>{dishName}</h3>
      <div className={css.cardTextContainer}>
        <p>
          Type: <span className={css.highlighted}>{type}</span>
        </p>
        <p>
          Price: <span className={css.highlighted}>{price} UAH</span>
        </p>
        <p>
          Quantity: <span className={css.highlighted}>{amount}</span>
        </p>
        <Buttons
          setCart={setCart}
          setAmount={setAmount}
          amount={amount}
          dish={dish}
        />
      </div>
    </div>
  );
};
export default DishCardInCart;
