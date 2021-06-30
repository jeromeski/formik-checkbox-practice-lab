import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function CheckboxGroup({ name, label, options, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {(props) => {
          console.log();
          const { field, form } = props;
          const { setFieldValue } = form;
          console.log(
            props
            // field
          );
          return options.map((option) => (
            <React.Fragment key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={
                  field.value === 'ptpOption0'
                    ? true
                    : field.value.includes(option.value)
                }
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
