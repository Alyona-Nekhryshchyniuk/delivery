import { useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import ListToSelectDish from '../components/ListToSelectDish/ListToSelectDish';

const ShopPage = () => {
  const [chosenShop, setChosenShop] = useState('vilkipalki');

  return (
    <div>
      <SideBar setChosenShop={setChosenShop} chosenShop={chosenShop} />
      <ListToSelectDish chosenShop={chosenShop} />
    </div>
  );
};

export default ShopPage;
