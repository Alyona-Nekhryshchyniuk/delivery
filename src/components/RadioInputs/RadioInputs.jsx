import css from './radioInputs.module.scss';
import useMyContext from '../../helpers/useMyContext';
const RadioInputs = ({ name, chosenShop, setChosenShop }) => {
  const { cart } = useMyContext();

  const defineLabel = () => {
    switch (name) {
      case 'yaposhka':
        return 'Yaposhka';
      case 'vilkipalki':
        return 'Vilki Palki';
      case 'pepperpoint':
        return 'Pepper Point';
      case 'kfs':
        return 'KFS';
      case 'burgerking':
        return 'BurgerKing';
      case 'macdonalds':
        return 'McDonald`s';
      default:
        return;
    }
  };

  return (
    <li className={css.radioItem}>
      <label className={css.radioLabel}>
        {defineLabel()}
        <input
          className={css.radioInput}
          type="radio"
          name={name}
          checked={name === chosenShop}
          disabled={cart.length && chosenShop !== name}
          onChange={e => setChosenShop(e.target.name)}
        />
      </label>
    </li>
  );
};
export default RadioInputs;
