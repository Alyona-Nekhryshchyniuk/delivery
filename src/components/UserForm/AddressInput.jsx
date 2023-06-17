import css from './userForm.module.scss';

export const AddressInput = ({
  setDestinationValue,
  destinationValue,
  Autocomplete,
}) => {
  const inputTag = (
    <input
      className={css.input}
      name="address"
      type="text"
      placeholder="Type your address"
      // bounds={bounds}
      // restrictions={restrictions}
      // options={options}
      onChange={e => {
        setDestinationValue(e.target.value);
      }}
      value={destinationValue}
    />
  );
  return (
    <label className={css.label}>
      Address
      {Autocomplete ? <Autocomplete>{inputTag}</Autocomplete> : inputTag }
      {/* <ErrorMessage
        name="address"
        component="div"
        className={css.errorMessage}
      /> */}
    </label>
  );
};
