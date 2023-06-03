import { useEffect, useReducer } from 'react';
import useMyContext from '../../helpers/useMyContext';
import { amountReducer } from '../../helpers/amountReducer';

const DishCard = ({ dish }) => {
  const { imageURL, dishName, type, price } = dish;

  const { cart, setCart } = useMyContext();
  const [amount, setAmount] = useReducer(amountReducer);

  useEffect(() => {
    setAmount({ type: 'mount', payload: { cart, dish } });
  }, []);

  return (
    <div>
      <img src={imageURL} />
      <h3>{dishName}</h3>
      <span>Type: {type}</span>
      <span>Price: {price}UAH</span>
      {!cart.some(d => d.dishName === dish.dishName) ? (
        <button
          onClick={e => {
            setCart({ type: 'first increment', payload: dish });
            setAmount({ type: 'increment' });
          }}
        >
          Add to cart
        </button>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
export default DishCard;

// const DishCard = ({ dish }) => {
//   const { cart, setCart } = useMyContext();
//   console.log(cart);
//   const { imageURL, dishName, type, price } = dish;
//   const [amount, setAmount] = useState();

//   // const clickHandle = e => {
//   //   setCart(cartContent => [...cartContent, dish]);
//   // };

//   // const [amount, setAmount] = useState();

//   useEffect(() => {
//     setAmount(() => {
//       const dishInCart = cart.find(d => d.dishName === dish.dishName);

//       return dishInCart ? dishInCart.amount : 0;
//     });
//   }, []);

//   // const amount = () => {
//   //   const dishInCart = cart.find(d => d === dish);
//   //   return dishInCart ? dishInCart.amount : 0;
//   // };

//   const removeDishFromCartHandle = e => {
//     setCart(prev => {
//       const ind = prev.indexOf(dish);
//       const copy = [...prev];
//       copy.splice(ind, 1);
//       return copy;
//     });
//   };

//   const amountChangehandle = e => {
//     if (e.target.innerHTML === '+1') {
//       setAmount(prev => (prev += 1));
//       setCart(cartContent => {
//         return [...cartContent].map(
//           d => d.name === dish.name && { ...d, amount: ++d.amount }
//         );
//       });
//       return;
//     }

//     setAmount(prev => (prev -= 1));
//     setCart(cartContent => {
//       return [...cartContent].map(
//         d => d.name === dish.name && { ...d, amount: --d.amount }
//       );
//     });
//   };

//   return (
//     <div>
//       <img src={imageURL} />
//       <h3>{dishName}</h3>
//       <span>Type: {type}</span>
//       <span>Price: {price}UAH</span>
//       {!cart.some(d => d.name === dish.name) ? (
//         <button
//           onClick={e => {
//             setAmount(1);
//             setCart(cartContent => [...cartContent, { ...dish, amount: 1 }]);
//           }}
//         >
//           Add to cart
//         </button>
//       ) : (
//         <>
//           <span>Quantity:{amount}</span>

//           <button type="button" onClick={amountChangehandle}>
//             +1
//           </button>
//           <button type="button" onClick={amountChangehandle}>
//             -1
//           </button>
//           <button type="button" onClick={removeDishFromCartHandle}>
//             Remove
//           </button>
//         </>
//       )}
//     </div>
//   );
// };
// export default DishCard;
