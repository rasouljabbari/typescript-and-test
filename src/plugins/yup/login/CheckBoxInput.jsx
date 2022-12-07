import React from "react";
import { ErrorMessage, Field } from "formik";

function CheckBoxInput({ children, label,label_list, ...props }) {
  return (
    <>
      <div id={props.id}>
        {label}
        {
          props.isRequired && <span className={'dv-isRequired'}>*</span>
        }
      </div>
      <div role="group" aria-labelledby={props.id}>
        {
          label_list.map((info, index) => (
            <label key={index}>
              <Field {...props} value={info} />
              {info}
            </label>
          ))
        }
      </div>
      <div className={'dv-error-text'}>
        <ErrorMessage name={props.name} />
      </div>
    </>
  );
}

export default CheckBoxInput;