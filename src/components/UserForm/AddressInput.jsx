import css from './userForm.module.scss';

export const AddressInput = ({
  Autocomplete,
  setDestinationValue,
  destinationValue,
}) => {
  const input = (
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
      {Autocomplete ? <Autocomplete>{input}</Autocomplete> : { input }}
      {/* <ErrorMessage
        name="address"
        component="div"
        className={css.errorMessage}
      /> */}
    </label>
  );
};
