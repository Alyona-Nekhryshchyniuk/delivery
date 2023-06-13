import { Formik, Form, ErrorMessage, Field } from 'formik';
import { object, string } from 'yup';
import css from './userForm.module.scss';
import cartCss from '../Cart/cart.module.scss';
import style from '../Buttons/buttons.module.scss';
import Map from '../map/Map';
import { useEffect, useRef, useState } from 'react';
import Cart from '../Cart/Cart';
import { AddressInput } from './AddressInput';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  OverlayView,
} from '@react-google-maps/api';

let userSchema = object({
  name: string().required('Field is reqiuired'),
  email: string().email('Must be a valid email').required('Field is reqiuired'),
  phone: string()
    .required('Field is reqiuired')
    .min(5, 'Must be at least 5 characters long')
    .max(12, 'Must be no more than 12 characters long'),
  address: string(),
  // .required('Input correct destination address'),
});

const submitHandle = (values, actions) => {
  actions.setSubmitting(false);
  console.log(values);
  actions.resetForm();
};

const initValues = { name: '', email: '', phone: '', address: '' };
const librariesToEnable = ['places'];

// const onLoad = autocomplete => {
//   console.log('autocomplete: ', autocomplete);
// };

//  onPlaceChanged () {
//     if (this.autocomplete !== null) {
//       console.log(this.autocomplete.getPlace())
//     } else {
//       console.log('Autocomplete is not loaded yet!')
//     }
//   }
const UserForm = ({ chosenShop }) => {
  const [destinationValue, setDestinationValue] = useState('');
  const [showDeliveryCost, setDeliveryCost] = useState(false);

  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: librariesToEnable,
  });

  /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();

  // if (!isLoaded) {
  //   return <p>Google map is loading ...</p>;
  // }

  // const options = {
  //   strictBounds: true,
  // };

  // // eslint-disable-next-line no-undef
  // const bounds = new window.google.maps.LatLngBounds(
  //   // eslint-disable-next-line no-undef
  //   new google.maps.LatLng(46.619848, 30.542186), // top left corner of map
  //   // eslint-disable-next-line no-undef
  //   new google.maps.LatLng(46.290611, 30.84843) // bottom right corner
  // );

  // {
  //   north: 30.781139,
  //   south: 30.676082,
  //   east: 46.582106,
  //   west: 46.460209,
  // };

  // const restrictions = {
  //   country: 'ua',
  // };
  // const destinationValueClear = () => {
  //   setDestinationValue = '';
  //   return;
  // };

  return (
    <>
      <Formik
        validationSchema={userSchema}
        initialValues={initValues}
        onSubmit={submitHandle}
      >
        {() => (
          <Form className={css.shoppingCartPageContainer}>
            <div className={css.form}>
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
                  placeholder="Type your email"
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
                  placeholder="Type your phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.errorMessage}
                />
              </label>
              {isLoaded ? (
                // <label className={css.label}>
                //   Address
                //   <Autocomplete
                //   // bounds={bounds}
                //   // restrictions={restrictions}
                //   // options={options}
                //   >
                //     <input
                //       className={css.input}
                //       name="address"
                //       type="text"
                //       placeholder="Type your address"
                //       // ref={destiantionRef}

                //       onChange={e => {
                //         console.log('change');
                //         setDestinationValue(e.target.value);
                //       }}
                //       // ref={destiantionRef}
                //       value={destinationValue}
                //     />
                //   </Autocomplete>
                //   <ErrorMessage
                //     name="address"
                //     component="div"
                //     className={css.errorMessage}
                //   />
                // </label>
                <AddressInput
                  Autocomplete={Autocomplete}
                  setDestinationValue={setDestinationValue}
                  destinationValue={destinationValue}
                />
              ) : (
                <label className={css.label}>
                  Address
                  <input
                    className={css.input}
                    name="address"
                    type="text"
                    placeholder="Type your address"
                    // ref={destiantionRef}

                    onChange={e => {
                      console.log('change');
                      setDestinationValue(e.target.value);
                    }}
                    // ref={destiantionRef}
                    value={destinationValue}
                  />{' '}
                </label>
              )}

              <Map
                chosenShop={chosenShop}
                destinationValue={destinationValue}
                setDestinationValue={setDestinationValue}
                isLoaded={isLoaded}
                showDeliveryCost={showDeliveryCost}
              />
            </div>
            <section className={cartCss.cartSectionContent}>
              {' '}
              <Cart
                chosenShop={chosenShop}
                showDeliveryCost={showDeliveryCost}
                setDeliveryCost={setDeliveryCost}
              ></Cart>
              <button type="submit" className={style.submitBtn}>
                Submit
              </button>
            </section>

            {/* <button type="submit">Submit</button> */}
            {/* <SimpleMap /> */}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default UserForm;
