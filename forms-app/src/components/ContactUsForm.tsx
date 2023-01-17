import { Formik, Form, FormikHelpers } from "formik";
import TextArea from "./Textarea";
import * as yup from "yup";
import "yup-phone";
import Input from "./Input";

const FormikForm = () => {
  interface Values extends yup.InferType<typeof contactUsSchema> {
    name: string;
    company: string;
    telephone: string;
    email: string;
    message: string;
  }

  const messageError = "* please provide a message that is between 20 and 500 characters in length";
  const emailError = "* please provide a valid email address";
  const contactUsSchema = yup.object({
    name: yup
      .string()
      .matches(
        /^[A-Za-z ]*$/,
        "* name must contain only alphabetic characters "
      )
      .required("* name is a required field"),
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

  return (
    <Formik
      validationSchema={contactUsSchema}
      validateOnChange={false}
      initialValues={{
        name: "",
        company: "",
        telephone: "",
        email: "",
        message: "",
      }}      
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {        
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);        
      }}
    >
      {({ errors, touched, values, resetForm }) => (
        <Form>
          <div className="upper-container">
            <div className="details-container">
              <Input
                name="name"
                error={errors.name}
                touched={touched.name}
                value={values.name.valueOf()}
                placeholder="Your name"
              />
              <Input
                name="company"
                error={errors.company}
                touched={touched.company}
                value={values.company.valueOf()}
                placeholder="Company Name"
              />
              <Input
                name="telephone"
                error={errors.telephone}
                touched={touched.telephone}
                value={values.telephone.valueOf()}
                placeholder="Telephone"
              />
              <Input
                name="email"
                error={errors.email}
                touched={touched.email}
                value={values.email.valueOf()}
                placeholder="Email Address"
              />
            </div>
            <div className="message-container">
              <TextArea
                name="message"
                error={errors.message}
                touched={touched.message}
                value={values.message.valueOf()}
                placeholder="Enter a message..."
              />
            </div>
          </div>

          <div className="form-actions-container">
            <Input name="send-button" value="" />
            <div className="text-disclaimer" id="disclaimer">
              Submitting your details indicates your consent for us to process
              your personal data as explained in our privacy notice here. Please
              read this important notice, which contains details on how to
              exercise your privacy rights, including opting out of direct
              marketing.
            </div>
            <button
              id="clear-form"
              className="clear-form"
              onClick={(event) => {
                event.preventDefault();
                resetForm();
              }}
            >
              Clear form
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
