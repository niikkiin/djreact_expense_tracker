import React from 'react';

// styled components
import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = () => (
  <FormGroupContainer>
    <FormInputContainer />
    {/* NOTE: for fdemo only. so i won't forget passing some props in this classname */}
    <FormInputLabel className='shrink'>
      Transaction Name <span>*</span>
    </FormInputLabel>
    <FormInputLabel>
      Transaction Name <span>*</span>
    </FormInputLabel>
  </FormGroupContainer>
);

export default FormInput;
