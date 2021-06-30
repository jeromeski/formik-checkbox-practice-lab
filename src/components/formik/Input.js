import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Input({ name, label, ...rest }) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
