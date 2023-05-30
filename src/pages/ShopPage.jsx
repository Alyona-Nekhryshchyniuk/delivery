import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import ListToSelectDish from '../components/ListToSelectDish/ListToSelectDish';

const ShopPage = ({ setCart }) => {
  // const [shops, setShops] = useState([]);
  const [chosenShop, SetChosenShop] = useState('VilkiPalki');
  // useEffect(() => {
  //   async () => {
  //     //   const resp = await fetch('url', get, );
  //     // const {shops} = response.json()
  //     //   setShops(shops);
  //   };
  // }, []);
  return (
    <div>
      <SideBar SetChosenShop={SetChosenShop} chosenShop={chosenShop} />
      <ListToSelectDish setCart={setCart} chosenShop={chosenShop} />
    </div>
  );
};

export default ShopPage;
