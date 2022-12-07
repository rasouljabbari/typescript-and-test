import React from "react";
import { ErrorMessage, Field } from "formik";

function RangeInput({ children, label,label_list, ...props }) {
  return (
    <div>
      <label htmlFor={props.name || props.id}>{label}</label>
      {
        props.isrequired && <span className={'dv-isRequired'}>*</span>
      }
      <Field {...props}/>
      <div className={'dv-error-text'}>
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
}

export default RangeInput;