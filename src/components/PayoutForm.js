import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormControl from './formik/FormControl';

function PayoutForm() {
  const initialValues = {
    phone: '',
    policyToPayOption: []
  };

  const policyToPayOptions = [
    { key: 'Select All', value: 'ptpOption0' },
    { key: 'Option 1', value: 'ptpOption1' },
    { key: 'Option 2', value: 'ptpOption2' }
  ];

  const onSubmit = (values) => console.log(values);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <FormControl
              control="input"
              type="text"
              name="phone"
              label="Contact Number"
            />
            <FormControl
              control="checkbox"
              name="policyToPayOption"
              // label="Contact Number"
              options={policyToPayOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PayoutForm;
