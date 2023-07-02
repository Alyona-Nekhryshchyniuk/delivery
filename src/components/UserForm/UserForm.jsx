import { Formik} from 'formik';
import { object, string } from 'yup';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMyContext from '../../helpers/useMyContext'
import { useLocalStorage } from '../../helpers/localStorageHook.js';
import FormInner from './FormInner'


let userSchema = object({
  name: string().required('Name is reqiuired'),
  email: string().email('Must be a valid email').required('Email is reqiuired'),
  phone: string()
    .required('Phone is reqiuired')
    .min(5, 'At least 5 characters long')
    .max(12, 'No more than 12 characters long'),
  address: string().required('Destination address is required'),
});

const INITIAL_VALUES = { name: '', email: '', phone: '', address: '' };

const UserForm = ({ chosenShop }) => {
  const [initialValues, handleUpdateForm] = useLocalStorage({ key: 'Form data', value: INITIAL_VALUES });

  const { cart } = useMyContext();
  const [formSubmitedFlag, setFormSubmitedFlag] = useState(false);

const submitHandle = (values, actions) => {
  actions.setSubmitting(false);
  console.log(values);
  console.log(cart);
  toast('We saved details of your order. Keep an ear out for our call')
  setFormSubmitedFlag(true)
  setTimeout(() => {
    setFormSubmitedFlag(false)
  }, 5000);
};


  return (
    <>
      <Formik
        enableReinitialize 
        validationSchema={userSchema}
        initialValues={initialValues}
        onSubmit={submitHandle}
      >
        {(props) => <FormInner formikProps={props} handleUpdateForm={handleUpdateForm} chosenShop={chosenShop} formSubmitedFlag={formSubmitedFlag}/>}
      </Formik>
      <ToastContainer/>
    </>
  );
};
export default UserForm;
