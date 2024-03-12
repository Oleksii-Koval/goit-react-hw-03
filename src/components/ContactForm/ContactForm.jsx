import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.number().required("Required!"),
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
      <Form className={css.form}>
        <label className={css.label}>
          <RiContactsFill className={css.icon} />
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Oleksii Koval"
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label}>
          <BsFillTelephoneFill className={css.icon} />
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="48696647625"
          />
          <ErrorMessage name="number" component="span" />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
