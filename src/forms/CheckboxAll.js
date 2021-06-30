import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function CheckboxAll(props) {
  const {
    name,
    label,
    values,
    setFieldValue,
    toggleSelectAll,
    options
  } = props;
  return (
    <div className="form-control d-inline-block">
      <Field
        type="checkbox"
        name={name}
        id={name}
        value={name}
        onChange={() => toggleSelectAll(values, setFieldValue, options)}
        checked={values.checked1}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default CheckboxAll;
