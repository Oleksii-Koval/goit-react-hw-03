import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.number()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (data, actions) => {
    onAdd({ id: nanoid(), ...data });
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={formSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field type="text" name="name" placeholder="Oleksii Koval" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <Field type="tel" name="number" placeholder="48696647625" />
          <ErrorMessage name="number" component="span" />
        </label>
        <label>
          <button type="submit">Add contact</button>
        </label>
      </Form>
    </Formik>
  );
};

export default ContactForm;
