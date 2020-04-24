import React from 'react';

// styled components
import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {
      label ? (
        <FormInputLabel className={(props.value.length !== 0) ? 'shrink' : ''}>
          {label}
          {/* TODO function for required <span>*</span> */}
        </FormInputLabel>
      ) : null
    }
  </FormGroupContainer>
);

export default FormInput;
