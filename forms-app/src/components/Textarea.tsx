import React from "react";
import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { InputProps } from "../interfaces/InputProps";
import { fieldClass } from "../helpers/ClassName";

const TextAreaInner = (props: FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <textarea
      className="input-text textarea"
      {...field}
      placeholder={props.placeholder}
    />
  );
};

const TextArea: React.FC<InputProps> = ({
  name,
  error,
  touched,
  value,
  placeholder,
}) => {
  return (
    <>
      <div
        className={"input-container large " + fieldClass(error, touched, value)}
      >
        <TextAreaInner name={name} placeholder={placeholder} />
      </div>
      <ErrorMessage component="div" className="error-message" name="message" />
    </>
  );
};

export default TextArea;
