import { Field, ErrorMessage, useField } from "formik";
import { InputProps } from "../interfaces/InputProps";
import { InputClass } from "../helpers/InputClass";
const Input: React.FC<InputProps> = ({ ...props }: InputProps) => {
  const [field] = useField(props);
  if (props.name === "send-button") {
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
      <div className={"input-container " + InputClass(props.error, props.touched, props.value)}>
        <Field
          {...field}
          className="input-text"
          id={props.name}          
          placeholder={props.placeholder}
          name={props.name}
        />
      </div>
      <ErrorMessage component="div" className="error-message" name={props.name} />
    </>
  );
};
export default Input;
