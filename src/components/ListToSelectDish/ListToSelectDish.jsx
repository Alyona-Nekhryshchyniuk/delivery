import DishCard from '../DishCard/DishCard';
import { useEffect, useState } from 'react';
const basicURL = 'http://localhost:3001/';




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
      <ul>
        {dishes.map(dish => (
          <DishCard key={dish._id}  dish={dish} />
        ))}
      </ul>
    </section>
  );
};
export default ListToSelectDish;


// const ListToSelectDish = ({ chosenShop, setCart, cart }) => {
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const response = await fetch(`${basicURL}api/${chosenShop}`);
//       const { dishes } = await response.json();
//       setDishes(dishes);
//     })();
//   }, [chosenShop]);

//   return (
//     <section>
//       <ul>
//         {dishes.map(dish => (
//           <DishCard key={dish._id} cart={cart} setCart={setCart} dish={dish} />
//         ))}
//       </ul>
//     </section>
//   );
// };
// export default ListToSelectDish;