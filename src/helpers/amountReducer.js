export const amountReducer = (prev, action) => {
  switch (action.type) {
    case 'mount':
      const dishInCart = action.payload.cart.find(
        d => d.dishName === action.payload.dish.dishName
      );
      return dishInCart ? dishInCart.amount : 0;

    case 'increment':
      return (prev += 1);

    case 'decrement':
      return (prev -= 1);

    default:
      return;
  }
};
