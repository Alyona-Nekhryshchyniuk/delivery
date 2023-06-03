import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import Container from './Container';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Shopping cart</NavLink>
            </li>
          </ul>
        </nav>
        <div style={{ fontSize: 40 }}> 🍽️ </div>
      </header>
      <main>
        <Suspense fallback={<div>"Loading ..."</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
