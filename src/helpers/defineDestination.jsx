export const defineDestination = chosenShop => {
  let center;
  let address;
  let name;

  // let chosenShop = 'pepperpoint';
  const coordinades = {
    yaposhka: { lat: 46.398950646372334, lng: 30.732959453049933 },
    vilkipalki: { lat: 46.47171105714595, lng: 30.74066311256781 },
    pepperpoint: { lat: 46.41186191248775, lng: 30.712226626646803 },
    kfs: { lat: 46.485043244598266, lng: 30.73751228540019 },
    burgerking: { lat: 46.47879697294342, lng: 30.76553110029899 },
    macdonalds: { lat: 46.48462022832956, lng: 30.737307244958462 },
  };

  switch (chosenShop) {
    case 'yaposhka':
      center = coordinades.yaposhka;
      address = 'Люстдорфська дор., 160/1, Одеса';
      name = 'Yaposhka';
      break;
    case 'vilkipalki':
      center = coordinades.vilkipalki;
      address = 'вул. Пушкінська, 66, Одеса';
      name = 'Vilki Palki';
      break;
    case 'pepperpoint':
      center = coordinades.pepperpoint;
      address = 'пр-т Небесної Сотні, 6/8, Одеса';
      name = 'Pepper Point';
      break;
    case 'kfs':
      center = coordinades.kfs;
      address = 'вул. Дерибасівська, 16, Одеса';
      name = 'KFS';
      break;
    case 'burgerking':
      center = coordinades.burgerking;
      address = 'Пляж Ланжерон, 25, Одеса';
      name = 'BurgerKing';
      break;
    case 'macdonalds':
      center = coordinades.macdonalds;
      address = 'вул. Дерибасівська, 23, Одеса';
      name = 'McDonald`s';
      break;
    default:
      center = undefined;
  }
  return { center, address, name };
};
