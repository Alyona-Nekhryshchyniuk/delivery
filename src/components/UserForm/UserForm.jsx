import { Formik, Form, ErrorMessage, Field } from 'formik';
import { object, string } from 'yup';
import css from './userForm.module.scss';
import Map from '../map/Map';
import { useEffect, useRef, useState } from 'react';

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

const UserForm = ({ chosenShop }) => {
  const [destinationValue, setDestinationValue] = useState('');

  const { google_maps_api_key } = process.env;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: google_maps_api_key,

    libraries: librariesToEnable,
  });

  if (!isLoaded) {
    return <p>Google map is loading ...</p>;
  }

  /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();

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
          <Form className={css.form}>
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
            <label className={css.label}>
              Address
              <Autocomplete>
                <Field
                  className={css.input}
                  name="address"
                  type="text"
                  placeholder="Type your address"
                  // ref={destiantionRef}
                  autoComplete="true"
                  onChange={e => {
                    setDestinationValue(e.target.value);
                  }}
                  value={destinationValue}
                />
              </Autocomplete>
              <ErrorMessage
                name="address"
                component="div"
                className={css.errorMessage}
              />
            </label>
            <Map
              chosenShop={chosenShop}
              destinationValue={destinationValue}
              destinationValueClear={setDestinationValue}
              isLoaded={isLoaded}
            />
            {/* <button type="submit">Submit</button> */}
            {/* <SimpleMap /> */}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default UserForm;
