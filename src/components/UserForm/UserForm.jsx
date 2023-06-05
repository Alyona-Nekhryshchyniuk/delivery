import { Formik, Form, ErrorMessage, Field } from 'formik';
import { object, string } from 'yup';
import css from './userForm.module.scss';
import SimpleMap from '../GoogleMap/SimpleMap';

let userSchema = object({
  name: string().required('Field is reqiuired'),
  email: string().email('Must be a valid email').required('Field is reqiuired'),
  phone: string()
    .required('Field is reqiuired')
    .min(5, 'Must be at least 5 characters long')
    .max(12, 'Must be no more than 12 characters long'),
  address: string().required('Field is reqiuired'),
});

const submitHandle = (values, actions) => {
  actions.setSubmitting(false);
  console.log(values);
  actions.resetForm();
};

const initValues = { name: '', email: '', phone: '', address: '' };

const UserForm = () => {
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
              <Field
                className={css.input}
                name="address"
                type="text"
                placeholder="Type your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className={css.errorMessage}
              />
            </label>
            <button type="submit">Submit</button>
            {/* <SimpleMap /> */}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default UserForm;
