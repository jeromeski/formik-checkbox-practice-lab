import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import Input from './Input';

function FormControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input': {
      return <Input {...rest} />;
    }
    case 'checkbox': {
      return <CheckboxGroup {...rest} />;
    }
    case 'select':
    default:
      return null;
  }
}

export default FormControl;
