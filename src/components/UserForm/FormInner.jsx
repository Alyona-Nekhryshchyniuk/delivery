import { Form, ErrorMessage, Field } from 'formik';
import css from './userForm.module.scss';
import cartCss from '../Cart/cart.module.scss';
import style from '../Buttons/buttons.module.scss';
import Map from '../map/Map';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import { decodeSecretData } from '../../helpers/decodeSecretData';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-toastify/dist/ReactToastify.css';
import { useJsApiLoader } from '@react-google-maps/api';


const librariesToEnable = ['places'];

const FormInner = ({
  formikProps,
  chosenShop,
  formSubmitedFlag,
  handleUpdateForm,
}) => {
  useEffect(() => {
    handleUpdateForm(formikProps.values);
  }, [handleUpdateForm, formikProps.values]);
  const [destinationValue, setDestinationValue] = useState('');
  const [showDeliveryCost, setDeliveryCost] = useState(false);

  const GOOGLE_MAPS_API_KEY = decodeSecretData(
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  );

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: librariesToEnable,
  });

  return (
    <Form className={css.form}>
      <div
        className={css.inputsAndMapFormSection}
        onMouseLeave={() => {
          destinationValue &&
            formikProps.setFieldValue('address', destinationValue.label);
        }}
      >
        <label className={css.label}>
          Name
          <Field
            name="name"
            type="text"
            placeholder="Type your name"
            className={css.input}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={css.errorMessage}
          />
        </label>
        <label className={css.label}>
          Email
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            component="div"
            className={css.errorMessage}
          />
        </label>
        <label className={css.label}>
          Phone
          <Field
            className={css.input}
            name="phone"
            type="text"
            placeholder="Phone number"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className={css.errorMessage}
          />
        </label>

        {isLoaded ? (
          <>
            <label className={css.hiddenLabel}>
              Address
              <div className={css.autoCompleteInputContainer}>
                <GooglePlacesAutocomplete
                  apiKey={GOOGLE_MAPS_API_KEY}
                  apiOptions={{ region: 'UA' }}
                  selectProps={{
                    styles: {
                      option: provided => ({
                        ...provided,
                        color: 'rgb(136, 106, 106)',
                        fontWeight: 'normal',
                        FontSize: '15px',
                      }),
                    },
                    destinationValue,
                    onChange: setDestinationValue,
                  }}
                />
              </div>
              <Field className={css.hiddenInput} name="address" type="text" />
              <ErrorMessage
                name="address"
                component="div"
                className={css.errorMessage}
              />
            </label>
          </>
        ) : (
          <label className={css.hiddenLabel}>
            Address
            <Field className={css.input} name="address" type="text" />
            <ErrorMessage
              name="address"
              component="div"
              className={css.errorMessage}
            />
          </label>
        )}

        <Map
          chosenShop={chosenShop}
          destinationValue={destinationValue.label}
          setDestinationValue={setDestinationValue}
          isLoaded={isLoaded}
          showDeliveryCost={showDeliveryCost}
        />
      </div>
      <section className={cartCss.cartFormSection}>
        {' '}
        <Cart
          chosenShop={chosenShop}
          showDeliveryCost={showDeliveryCost}
          setDeliveryCost={setDeliveryCost}
        />
        <button
          type="submit"
          className={style.submitBtn}
          disabled={formSubmitedFlag}
        >
          Submit
        </button>
      </section>
    </Form>
  );
};

export default FormInner;
