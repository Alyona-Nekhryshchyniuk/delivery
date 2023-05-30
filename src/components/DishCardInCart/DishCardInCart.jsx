const DishCardInCart = ({ name, img, price, setTotal }) => {
  return (
    <>
      <div>
        <img src={img} />
        <h3>{name}</h3>
        <span>{price}</span>
        <input
          required=""
          name="amount"
          type="number"
          min="1"
          step="1"
          value="1"
          onChange={prevTotal => setTotal((prevTotal += price))}
        />
      </div>
    </>
  );
};
export default DishCardInCart;
