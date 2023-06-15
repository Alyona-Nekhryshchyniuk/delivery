import DishCardInCart from '../DishCardInCart/DishCardInCart';
import { useEffect, useState } from 'react';
import useMyContext from '../../helpers/useMyContext';
import css from './cart.module.scss';
import style from '../Buttons/buttons.module.scss';

const Cart = ({ setDeliveryCost, showDeliveryCost }) => {
  const { cart } = useMyContext();
 

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => {
      let sum = 0;
      cart.map(dish => (sum += dish.amount * dish.price));
      return sum;
    });
  }, [cart]);

  const deliveryClickHandle = () => {
    console.log(showDeliveryCost);
    setDeliveryCost(!showDeliveryCost);
  };

  return (
    <div>
      <section>
        <ul className={css.cardList}>
          {cart.map(dish => (
            <DishCardInCart key={dish._id} dish={dish} />
          ))}
        </ul>
      </section>
      <div className={css.totalPrize}>
        <button
          type="button"
          className={style.deliveryCostBtn}
          onClick={deliveryClickHandle}
        >
          What's delivery cost ?
        </button>
        {showDeliveryCost && (
          <div className={css.deliveryInfo}>
            <span className={css.closeDeliveryColor}>free</span>
            <span className={css.midDeliveryColor}>30 UAH</span>
            <span className={css.farDeliveryColor}>60 UAH</span>
            <span className={css.dekiveryAsterisk}>
              * Has not yet been included into total prize
            </span>
          </div>
        )}
        <span>
          Total prize: <span className={css.highlighted}>{total} UAH</span>
        </span>
      </div>
 
    </div>
  );
};
export default Cart;
