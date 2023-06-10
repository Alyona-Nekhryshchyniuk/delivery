import css from './addToCartButton.module.scss';

const AddToCartButton = ({ text, ...onClick }) => {
  return (
    <button className={css.addToCartButton} {...onClick}>
      🛒 {text}
    </button>
  );
};
export default AddToCartButton;
