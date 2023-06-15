import DishCard from '../DishCard/DishCard';
import { useEffect, useState } from 'react';
import css from './listToSelectDish.module.scss';

const basicURL = process.env.REACT_APP_BASICURL;

const ListToSelectDish = ({ chosenShop }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${basicURL}api/${chosenShop}`);
      const { dishes } = await response.json();
      setDishes(dishes);
    })();
  }, [chosenShop]);

  return (
    <section>
      <ul className={css.cardList}>
        {dishes.map(dish => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </ul>
    </section>
  );
};
export default ListToSelectDish;
