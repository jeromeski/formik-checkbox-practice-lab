import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

function CheckboxTestTwo() {
  const initialValues = {
    selectAll: '',
    cbOption: []
  };

  const onSubmit = (values) => console.log(values);

  const toggleSelectAll = (setFieldValue, values) => {
    setFieldValue('selectAll', !values.selectAll);
    if (!values.selectAll) {
      setFieldValue('cbOption', (values.cbOption = []));
      setFieldValue('cbOption.cdOption1', values.cbOption.push('cbOption1'));
      setFieldValue('cbOption.cdOption2', values.cbOption.push('cbOption2'));
    } else {
      setFieldValue('cbOption', (values.cbOption = []));
    }
  };

  return (
    <React.Fragment>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values, setFieldValue }) => {
          return (
            <React.Fragment>
              <Form>
                <label htmlFor="selectAll">
                  <Field
                    name="selectAll"
                    id="selectAll"
                    type="checkbox"
                    value="selectAll"
                    onChange={() => toggleSelectAll(setFieldValue, values)}
                    checked={values.selectAll}
                  />
                  Select All
                </label>
                <label htmlFor="cbOption1">
                  <Field
                    name="cbOption"
                    type="checkbox"
                    value="cbOption1"
                    checked={values.cbOption.includes('cbOption1')}
                    disabled={values.selectAll}
                  />
                  Option 1
                </label>
                <label htmlFor="cbOption2">
                  <Field
                    name="cbOption"
                    type="checkbox"
                    value="cbOption2"
                    checked={values.cbOption.includes('cbOption2')}
                    disabled={values.selectAll}
                  />
                  Option 2
                </label>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            </React.Fragment>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}

export default CheckboxTestTwo;
