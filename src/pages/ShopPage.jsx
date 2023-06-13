import { useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import ListToSelectDish from '../components/ListToSelectDish/ListToSelectDish';
import css from '../components/Shared/shared.module.scss';

const ShopPage = ({ setChosenShop, chosenShop }) => {
  return (
    <div className={css.contentContainer}>
      <SideBar setChosenShop={setChosenShop} chosenShop={chosenShop} />
      <ListToSelectDish chosenShop={chosenShop} />
    </div>
  );
};

export default ShopPage;
