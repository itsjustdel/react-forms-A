import { Field, ErrorMessage } from "formik";
import { InputProps } from "../interfaces/InputProps";
import { InputClass } from "../helpers/InputClass";
const Input: React.FC<InputProps> = ({
  name,
  error,
  touched,
  value,
  placeholder,
}) => {
  if (name === "send-button") {
    return (
      <>
        <div className="input-container send-button" id="send-button">
          <button className="send-button-text" type="submit">
            Send
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={"input-container " + InputClass(error, touched, value)}>
        <Field
          className="input-text"
          id={name}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage component="div" className="error-message" name={name} />
    </>
  );
};
export default Input;
