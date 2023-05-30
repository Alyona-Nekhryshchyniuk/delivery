const DishCard = ({ setCart, dish }) => {
  const { imageURL, dishName, type } = dish;
  // const clickHandle = e => {
  //   setCart(cartContent => [...cartContent, dish]);
  // };

  return (
    <div>
      <img src={imageURL} />
      <h3>{dishName}</h3>
      <span>Type: {type}</span>
      <button
        onClick={e => {
          setCart(cartContent => [...cartContent, dish]);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
export default DishCard;
