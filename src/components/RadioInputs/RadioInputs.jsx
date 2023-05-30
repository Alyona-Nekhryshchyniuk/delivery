const RadioInputs = ({ name, chosenShop, setChosenShop }) => {
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
    <li>
      <label>
        {defineLabel()}
        <input
          type="radio"
          name={name}
          checked={name === chosenShop}
          onChange={e => setChosenShop(e.target.name)}
        />
      </label>
    </li>
  );
};
export default RadioInputs;
