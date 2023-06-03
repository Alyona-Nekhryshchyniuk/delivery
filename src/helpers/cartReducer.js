export const cartReducer = (prevCart, action) => {
  const dishInCurrentCard = action.payload;
  switch (action.type) {
    case 'first increment':
      return [...prevCart, { ...dishInCurrentCard, amount: 1 }];

    case 'remove':
      console.log(dishInCurrentCard);
      console.log(prevCart);
      const ind = prevCart.findIndex(el => el._id === dishInCurrentCard._id);
      const copy = [...prevCart];
      copy.splice(ind, 1);
      return copy;
  }

  return prevCart.map(el => {
    if (el.dishName === dishInCurrentCard.dishName) {
      switch (action.type) {
        case 'increment':
          el.amount = ++el.amount;
          return el;

        case 'decrement':
          el.amount = --el.amount;
          return el;

        default:
          return el;
      }
    }
    return el;
  });
};
