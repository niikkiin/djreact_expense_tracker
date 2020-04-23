// TODO add 

import styled, {css} from 'styled-components';

const primaryGray = '#8F9297';
const primaryTint = '#ECF0FA';
const primaryColor = '#303778';
const secondaryColor = '#EE3F5F';

const shrinkLabelStyles = css`
  color: ${primaryColor};
  font-size: 1.2rem;
  transform: translateY(-3rem);
`;

export const FormGroupContainer = styled.div`
  position: relative;
`; 

export const FormInputContainer = styled.input`
  font-size: 1.6rem;
  color: ${primaryColor};
  font-weight: 400;
  width: 100%;
  background-color: ${primaryTint};
  border-radius: 1rem;
  border: none;
  height: 4rem;
  padding: 0 0.5rem;
  display: block;
  transition: 300ms ease all;

  &:focus {
    outline: none;
    border-color: ${primaryColor};
  }

  &:focus ~ label {
    ${shrinkLabelStyles};
  }

`;

export const FormInputLabel = styled.label`
  font-size: 1.6rem;
  color: ${primaryGray};
  pointer-events: none;

  position:absolute;
  top: 1rem;
  left: 0.5rem;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles};
  }

  span {
    color: ${secondaryColor};
  }
`;