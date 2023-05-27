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
      </header>
      <main>{<Outlet />}</main>
    </>
  );
};
export default SharedLayout;
