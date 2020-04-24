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

export const SpanContainer = styled.div`
  position: absolute;
  top: 0;
  left: 4rem;
`;

export const CalendarInputContainer = styled.div`
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
  cursor: pointer;
  position: relative;

  div {
    position: absolute;
    top: 0.8rem;
    left: 1rem;
  }

  &:focus {
    outline: none;
    border-color: ${primaryColor};
  }

  &:focus ~ label {
    ${shrinkLabelStyles};
  }
`;