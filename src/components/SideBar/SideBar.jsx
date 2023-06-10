import RadioInputs from '../RadioInputs/RadioInputs';
import css from './sideBar.module.scss';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = ({ setChosenShop, chosenShop }) => {
  const shopNames = [
    'vilkipalki',
    'macdonalds',
    'yaposhka',
    'pepperpoint',
    'kfs',
    'burgerking',
  ];

  const clickLabelHandle = e => {
    e.target.innerHTML.includes('disabled') &&
      toast('Only from one cafe in one go');
  };

  return (
    <aside className={css.sidebar}>
      <ul className={css.shopList} onClick={clickLabelHandle}>
        {shopNames.map(name => (
          <RadioInputs
            key={name}
            name={name}
            chosenShop={chosenShop}
            setChosenShop={setChosenShop}
          />
        ))}
      </ul>
      <ToastContainer />
    </aside>
  );
};
export default SideBar;
