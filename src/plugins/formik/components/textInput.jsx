import React from "react";
import { ErrorMessage, Field } from "formik";

function TextInput({ children, label, ...props }) {
  return (
    <div>
      <label htmlFor={props.name || props.id}>{label}</label>
      <Field {...props}>
        {children}
      </Field>
      <ErrorMessage name={props.name} />
    </div>
  );
}

export default TextInput;