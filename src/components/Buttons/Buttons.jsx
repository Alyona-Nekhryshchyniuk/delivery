import css from './buttons.module.scss';
const Buttons = ({ setCart, setAmount, amount, dish }) => {
  return (
    <div className={css.btnsContainer}>
      <button
        type="button"
        className={css.increment}
        onClick={() => {
          setCart({ type: 'increment', payload: dish });
          setAmount({ type: 'increment' });
        }}
      >
        +1
      </button>
      {amount > 1 && (
        <button
          className={css.decrement}
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
        className={css.removeBtn}
        type="button"
        onClick={() => {
          setCart({ type: 'remove', payload: dish });
          setAmount({ type: 'remove' });
        }}
      >
        Remove
      </button>
    </div>
  );
};
export default Buttons;
