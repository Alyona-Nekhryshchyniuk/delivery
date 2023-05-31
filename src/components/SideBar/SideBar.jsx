import RadioInputs from '../RadioInputs/RadioInputs';

const SideBar = ({ setChosenShop, chosenShop }) => {
  const shopNames = [
    'vilkipalki',
    'macdonalds',
    'yaposhka',
    'pepperpoint',
    'kfs',
    'burgerking',
  ];

  return (
    <aside>
      <h2>Shops</h2>
      <ul>
        {shopNames.map(name => (
          <RadioInputs
            key={name}
            name={name}
            chosenShop={chosenShop}
            setChosenShop={setChosenShop}
          />
        ))}
      </ul>
    </aside>
  );
};
export default SideBar;
