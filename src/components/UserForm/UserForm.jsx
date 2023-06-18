import { Formik, Form, ErrorMessage, Field } from 'formik';
import { object, string } from 'yup';
import css from './userForm.module.scss';
import cartCss from '../Cart/cart.module.scss';
import style from '../Buttons/buttons.module.scss';
import Map from '../map/Map';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { decodeSecretData } from '../../helpers/decodeSecretData';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { useJsApiLoader } from '@react-google-maps/api';


let userSchema = object({
  name: string().required('Name is reqiuired'),
  email: string().email('Must be a valid email').required('Email is reqiuired'),
  phone: string()
    .required('Phone is reqiuired')
    .min(5, 'Must be at least 5 characters long')
    .max(12, 'Must be no more than 12 characters long'),
  address: string().required('Destination address is required'),
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
  const [showDeliveryCost, setDeliveryCost] = useState(false);


  const GOOGLE_MAPS_API_KEY = decodeSecretData(
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  );
 
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: librariesToEnable,
  });



  return (
    <>
      <Formik
        validationSchema={userSchema}
        initialValues={initValues}
        onSubmit={submitHandle}
      >
        {(props) => (
          <Form className={css.form}>
            <div className={css.inputsAndMapFormSection} onMouseLeave={()=>{destinationValue && props.setFieldValue('address', destinationValue.label)}}>
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
              
{isLoaded ? (<>      
      <label className={css.hiddenLabel} >
              Address
              <div  className={css.autoCompleteInputContainer} >
      <GooglePlacesAutocomplete apiKey={GOOGLE_MAPS_API_KEY}
        selectProps={{ styles: 
          {
          option: (provided) => ({
            ...provided,
            color: 'rgb(136, 106, 106)',
           fontWeight: 'normal',
           FontSize: '15px'
          }),
        },
        destinationValue,
          onChange: setDestinationValue,
        }}
      />
      </div>
                <Field
                  className={css.hiddenInput}
                  name="address"
                  type="text"
                />
            
                <ErrorMessage
                name="address"
                component="div"
                className={css.errorMessage}
              />
               </label></>) :(<label className={css.hiddenLabel}>
                  Address
                    <Field
                      className={css.input}
                      name="address"
                      type="text"
                    /><ErrorMessage
                    name="address"
                    component="div"
                    className={css.errorMessage}
                  /></label>)}
              
                
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
              ></Cart>
              <button type="submit" className={style.submitBtn}>
                Submit
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default UserForm;
