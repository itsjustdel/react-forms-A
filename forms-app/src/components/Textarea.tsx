import React from "react";
import { useField, FieldHookConfig } from "formik";

const TextArea = (props: FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <>
      <textarea className="input-text textarea" {...field} placeholder={props.placeholder}/>
    </>
  );
};

export default TextArea;