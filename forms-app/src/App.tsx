import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  useField,
  FieldHookConfig,
} from "formik";
import "./App.css";
import TextArea from "./components/Textarea";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const App = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="title">Contact us</div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>            
            <div className="input-container">
              <Field
                className="input-text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
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
            <div className="input-container">
              <Field
                className="input-text"
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            
            <div className="input-container large">
              <TextArea name="firstName" placeholder="Enter a message..." />
            </div>
            <div className="input-container send-button">
              <div className="send-button-text">Send</div>
            </div>

            <div className="text-disclaimer">
              Submitting your details indicates your consent for us to process
              your personal data as explained in our privacy notice here. Please
              read this important notice, which contains details on how to
              exercise your privacy rights, including opting out of direct
              marketing.
            </div>
            <a href="test me">
              <div className="clear-form">Clear form</div>
            </a>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default App;
