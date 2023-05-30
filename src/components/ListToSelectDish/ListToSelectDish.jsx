import DishCard from '../DishCard/DishCard';
import { useEffect, useState } from 'react';
const basicURL = 'http://localhost:3001/';
// props for item ^ img, productName
const ListToSelectDish = ({ chosenShop, setCart }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${basicURL}api/${chosenShop}`);
      const { dishes } = await response.json();
      setDishes(dishes);
    })();
  }, []);

  return (
    <section>
      <ul>
        {dishes.map(dish => (
          <DishCard key={dish._id} setCart={setCart} dish={dish} />
        ))}
      </ul>
    </section>
  );
};
export default ListToSelectDish;
