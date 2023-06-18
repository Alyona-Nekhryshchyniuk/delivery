import {Link} from 'react-router-dom'
import css from './shared.module.scss'

const EmptyCart = () => {
  return (
    <div className={css.emptyCartContentContainer} >
      <div style={{ marginBottom: 35 }}>Cart is empty. &#128533;</div>
      <div style={{ marginBottom: 25 }}>Don't starve !!!</div>

      <div>Add some tasty dishes on {<Link to='/'> <span className={css.shopLink}>Shop</span> </Link>} page. &#127790; &#127865;</div>
    </div>
  );
};

export default EmptyCart;
