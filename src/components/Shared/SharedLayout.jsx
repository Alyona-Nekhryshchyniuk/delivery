import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import Container from './Container';
import useMyContext from 'helpers/useMyContext';
import css from '../header/header.module.scss';
import style from '../Shared/shared.module.scss';

import { Loader } from './Loader';

const SharedLayout = () => {
  const { cart } = useMyContext();
  const isActiveHandle = ({ isActive }) => {
    return isActive ? `${css.navLink} ${css.active}` : css.navLink;
  };
  const orderedDishesQuantity = () => {
    return cart.reduce((prev, el) => {
      return prev + el.amount;
    }, 0);
  };
  return (
    <div>
      <header>
        <div className={css.headerContainer}>
          <nav>
            <ul className={css.navList}>
              <li>
                <NavLink to="/" className={isActiveHandle}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={isActiveHandle}>
                  Shopping cart
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={css.cartAmountContainer} style={{ fontSize: 55 }}>
            {' '}
            🍽️ <span className={css.cartAmount}>{orderedDishesQuantity()}</span>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default SharedLayout;
