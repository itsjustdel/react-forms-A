import React from "react";
import { useField, FieldHookConfig } from "formik";

const TextArea = (props: FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <>
      <textarea className="textarea" {...field} placeholder={props.placeholder}/>
    </>
  );
};

export default TextArea;