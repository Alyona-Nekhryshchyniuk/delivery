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

        {/* <li>
          <label>
            {' '}
            VilkiPalki{' '}
            <input
              type="radio"
              name="vilkipalki"
              checked={name === chosenShop}
              onChange={setChosenShop(e.target.name)}
            />
          </label>
        </li>
        <li>
          <label>
            McDonald's
            <input
              type="radio"
              name= "macDonalds"
              checked={name === chosenShop}
              onChange={setChosenShop(e.target.name)}
            />
          </label>
        </li>
        <li>
          {' '}
          <label>
            Yaposhka
            <input
              type="radio"
              name="yaposhka"
              checked={name === chosenShop}
              onChange={setChosenShop(e.target.name)}
            />
          </label>
        </li>
        <li>
          {' '}
          <label>
            PepperPoint
            <input
              type="radio"
              name="pepperpoint"
              checked={name === chosenShop}
              onChange={setChosenShop(e.target.name)}
            />
          </label>
        </li>
        <li>
          {' '}
          <label>
            KFS
            <input
              type="radio"
              name="kfs"
              checked={name === chosenShop}
              onChange={setChosenShop(e.target.name)}
            />
          </label>
        </li>
        <li>
          {' '}
          <label>
            BurgerKing
            <input
              type="radio"
              name="burgerking"
              checked={name === chosenShop}
              onChange={setChosenShop(e.target.name)}
            />
          </label>
        </li> */}
      </ul>
    </aside>
  );
};
export default SideBar;
