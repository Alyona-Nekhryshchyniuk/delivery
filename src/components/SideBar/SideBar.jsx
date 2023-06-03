import RadioInputs from '../RadioInputs/RadioInputs';
import css from './sideBar.module.scss';

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
    <aside className={css.sidebar}>
      <ul >
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
