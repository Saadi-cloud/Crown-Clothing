import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  firstName: yup.string().required("Required").max(20).min(4),
  lastName: yup.string().required("Required").max(8),
  email: yup.string().required("Required"),
  password: yup
    .string()
    .required("Required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password Must Match"),
});
const FormikForm = () => (
  <div>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "", confirm_password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
    <Form>
        <Field type="text" name="firstName" placeholder="Name" className="form-control my-2 mx-3 w-50" />
        <ErrorMessage name="firstName" className="ms-3 text-primary" component="div" />
        <Field type="text" name="lastName" placeholder="Last Name" className="form-control my-2 mx-3 w-50"/>
        <ErrorMessage name="lastName" className="ms-3 text-primary" component="div" />
        <Field type="email" name="email" placeholder="Email" className="form-control my-2 mx-3 w-50" />
        <ErrorMessage name="email" component="div" className="ms-3 text-primary" />
        <Field type="password" name="password" placeholder="Password" className="form-control my-2 mx-3 w-50" />
          <ErrorMessage name="password" component="div" className="ms-3 text-primary" />
          <Field type="password" name="confirm_password" placeholder="Confirm Password" className="form-control my-2 mx-3 w-50" />
          <ErrorMessage name="confirm_password" component="div" className="ms-3 text-primary" />
          <button type="submit" className="ms-3 btn btn-primary mt-3" disabled={isSubmitting}>
            Submit
          </button>
    </Form>
      )}
    </Formik>
  </div>
);
export default FormikForm;
