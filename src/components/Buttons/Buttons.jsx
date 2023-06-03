const Buttons = ({ setCart, setAmount, amount, dish }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCart({ type: 'increment', payload: dish });
          setAmount({ type: 'increment' });
        }}
      >
        +1
      </button>
      {amount > 1 && (
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
      )}
      <button
        type="button"
        onClick={() => setCart({ type: 'remove', payload: dish })}
      >
        Remove
      </button>
    </>
  );
};
export default Buttons;
