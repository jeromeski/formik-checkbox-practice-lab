import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControl from '../forms/FormControl';

function CheckboxTestThree() {
  const initialValues = {
    checked2: [],
    checked1: ''
  };

  const cOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' }
  ];

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({});

  const handleChange = (values, setFieldValue, options) => {
    setFieldValue('checked1', !values.checked1);
    if (!values.checked1) {
      options.forEach((option, index) => {
        console.log(option.value);
        setFieldValue('checked2', values.checked2.push(option.value));
      });
    } else {
      setFieldValue('checked2', (values.checked2 = []));
    }
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ values, setFieldValue }) => {
          // console.log(values)
          return (
            <Form>
              <FormControl
                control="checkbox1"
                name="checked1"
                label="Select All"
                handleChange={handleChange}
                values={values}
                setFieldValue={setFieldValue}
                options={cOptions}
              />
              <FormControl
                control="checkbox2"
                name="checked2"
                label=""
                options={cOptions}
              />
              <pre>{JSON.stringify(values, 2, null)}</pre>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}

export default CheckboxTestThree;
