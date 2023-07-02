export const cartReducer = (prevCart, action) => {
  const dishInCurrentCard = action.payload;

  switch (action.type) {
    case 'first increment':
      let newCart = [...prevCart, { ...dishInCurrentCard, amount: 1 }];

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;

    case 'remove':
      const ind = prevCart.findIndex(el => el._id === dishInCurrentCard._id);
      const copy = [...prevCart];
      copy.splice(ind, 1);
      localStorage.setItem('cart', JSON.stringify(copy));
      return copy;

      default: break;
  }

  return prevCart.map((el, _, arr) => {
    if (el.dishName === dishInCurrentCard.dishName) {
      switch (action.type) {
        case 'increment':
          el.amount = ++el.amount;
          localStorage.setItem('cart', JSON.stringify(arr));
          return el;

        case 'decrement':
          el.amount = --el.amount;
          localStorage.setItem('cart', JSON.stringify(arr));
          return el;

        default:
          return el;
      }
    }
    return el;
  });
};
