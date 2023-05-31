import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import ListToSelectDish from '../components/ListToSelectDish/ListToSelectDish';

const ShopPage = ({ setCart, cart }) => {
  // const [shops, setShops] = useState([]);
  const [chosenShop, setChosenShop] = useState('vilkipalki');
  // useEffect(() => {
  //   async () => {
  //     //   const resp = await fetch('url', get, );
  //     // const {shops} = response.json()
  //     //   setShops(shops);
  //   };
  // }, []);
  return (
    <div>
      <SideBar setChosenShop={setChosenShop} chosenShop={chosenShop} />
      <ListToSelectDish setCart={setCart} chosenShop={chosenShop} />
    </div>
  );
};

export default ShopPage;
