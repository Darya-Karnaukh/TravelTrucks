import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./FormCamper.module.css";
import { useState } from "react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormCamper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
  };
  const onSabmit = (values, options) => {
    setIsModalOpen(true);
    options.resetForm();
  };

  const CustomDateInput = ({ field, form }) => {
    const handleChange = (date) => {
      form.setFieldValue(field.name, date);
    };

    return (
      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Booking date*"
        className={s.input}
        wrapperClassName="react-datepicker__input-container"
      />
    );
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
      .required("This field is required"),
    date: Yup.date()
      .min(new Date(), "Select a date between today")
      .required("This field is required"),
    comment: Yup.string()
      .max(500, "Comment cannot be longer than 500 characters")
      .notRequired(),
  });

  return (
    <div className={s.wrapper}>
      <div className={s.containerTitle}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSabmit}
      >
        <Form className={s.inputForm}>
          <div className={s.containerInput}>
            <Field
              type="text"
              id="name"
              name="name"
              className={s.input}
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="div" className={s.error} />
            <Field
              type="email"
              id="email"
              name="email"
              className={s.input}
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="div" className={s.error} />
            <Field name="date" component={CustomDateInput} />
            <ErrorMessage name="date" component="div" className={s.error} />
            <Field
              as="textarea"
              id="comment"
              name="comment"
              className={s.textarea}
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="div" className={s.error} />
          </div>
          <button type="submit" className={s.sendButton}>
            Send
          </button>
        </Form>
      </Formik>
      {isModalOpen && (
        <div className={s.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <p>Your booking was successful!</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormCamper;
