import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

function CheckboxTestOne() {
  const initialValues = {
    selectAll: '',
    cbOption1: '',
    cbOption2: ''
  };

  const onSubmit = (values) => console.log(values);

  return (
    <React.Fragment>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {(formik) => {
          console.log(formik);
          return (
            <React.Fragment>
              <Form>
                <label htmlFor="selectAll">
                  <Field
                    name="selectAll"
                    id="selectAll"
                    type="checkbox"
                    value="selectAll"
                    onChange={() => {
                      formik.setFieldValue(
                        'selectAll',
                        !formik.values.selectAll
                      );
                      formik.setFieldValue(
                        'cbOption1',
                        !formik.values.cbOption1
                      );
                      formik.setFieldValue(
                        'cbOption2',
                        !formik.values.cbOption2
                      );
                    }}
                    checked={formik.values.selectAll}
                  />
                  Select All
                </label>
                <label htmlFor="cbOption1">
                  <Field
                    name="cbOption1"
                    type="checkbox"
                    value="cbOption1"
                    checked={formik.values.cbOption1}
                  />
                  Option 1
                </label>
                <label htmlFor="cbOption2">
                  <Field
                    name="cbOption2"
                    type="checkbox"
                    value="cbOption2"
                    checked={formik.values.cbOption2}
                  />
                  Option 2
                </label>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
              </Form>
            </React.Fragment>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}

export default CheckboxTestOne;
