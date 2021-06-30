import React from 'react';
import CheckboxAll from './CheckboxAll';
import CheckboxGroup from './CheckboxGroup';

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'checkbox2': {
      return <CheckboxGroup {...rest} />;
    }
    case 'checkbox1': {
      return <CheckboxAll {...rest} />;
    }
    default:
      return null;
  }
}

export default FormControl;
