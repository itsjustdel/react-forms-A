import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import "./App.css";
import TextArea from "./components/Textarea";
import * as yup from "yup";
import "yup-phone";

const messageError =
  "* please provide a message that is between 20 and 500 characters in length";
const emailError = "* please provide a valid email address";
const contactUsSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "* name must contain only alphabetic characters ")
    .required(),
  company: yup.string().notRequired(),
  email: yup.string().email(emailError).required(emailError),
  telephone: yup
    .string()
    .phone("UK", false, "* please provide a valid UK telephone number")
    .required(),
  message: yup
    .string()
    .min(20, messageError)
    .max(500, messageError)
    .required(messageError),
});

interface Values extends yup.InferType<typeof contactUsSchema> {
  name: string;
  company: string;
  telephone: string;
  email: string;
  message: string;
}

const classNameForValidationState = (field: string | undefined, touched: boolean | undefined) => {  
  if (field !== undefined) {
    return "invalid-input";
  }
  if (touched !== undefined){
    return "valid-input";
  }
  return "";
};

const App = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="title">Contact us</div>
        <Formik
          validateOnChange={false}
          // validateOnBlur={false}
          initialValues={{
            name: "",
            company: "",
            telephone: "",
            email: "",
            message: "",
          }}
          validationSchema={contactUsSchema}
          // onSubmit={values => {
          //   console.log(values);
          // }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            //console.log(contactUsSchema.validate(values));
            // setTimeout(() => { // look in to submission promises?
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            // }, 100);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={"input-container "+ classNameForValidationState(errors.name, touched.name)}>
                <Field
                  className={"input-text"}
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <ErrorMessage
                component="div"
                className="error-message"
                name="name"
              />
              <div className="input-container">
                <Field
                  className="input-text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                />
              </div>
              <div className="input-container">
                <Field
                  className="input-text"
                  id="telephone"
                  name="telephone"
                  placeholder="Telephone"
                />
              </div>
              <ErrorMessage
                component="div"
                className="error-message"
                name="telephone"
              />
              <div className="input-container">
                <Field
                  className="input-text"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <ErrorMessage
                component="div"
                className="error-message"
                name="email"
              />

              <div className="input-container large">
                <TextArea name="message" placeholder="Enter a message..." />
              </div>
              <ErrorMessage
                component="div"
                className="error-message"
                name="message"
              />
              <div className="input-container send-button">
                <button className="send-button-text" type="submit">
                  Send
                </button>
              </div>

              <div className="text-disclaimer">
                Submitting your details indicates your consent for us to process
                your personal data as explained in our privacy notice here.
                Please read this important notice, which contains details on how
                to exercise your privacy rights, including opting out of direct
                marketing.
              </div>
              <a href="test me">
                <div className="clear-form">Clear form</div>
              </a>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
