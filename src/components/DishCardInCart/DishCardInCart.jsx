import { useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';
import Buttons from '../Buttons/Buttons';
import css from '../DishCard/dishCard.module.scss';

const DishCardInCart = ({ dish }) => {
  const { dishName, type, imageURL, price } = dish;

  const { setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer, dish.amount);

  return (
    <>
      <div>
        <img src={imageURL} />
        <h3 className={css.dishName}>{dishName}</h3>
        <p className={css.dishType}>Type: {type}</p>
        <p className={css.price}>Price: {price}UAH</p>
        <span>Quantity:{amount}</span>
        <Buttons
          setCart={setCart}
          setAmount={setAmount}
          amount={amount}
          dish={dish}
        />
      </div>
    </>
  );
};
export default DishCardInCart;
