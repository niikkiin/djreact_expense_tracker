import styled, {css} from 'styled-components';

const primaryGray = '#8F9297';
const primaryColor = '#303778';
const primaryTint = '#ECF0FA';

const buttonStyles = css`
  background-color: ${primaryColor};
  color: #ffffff;
`;

const grayButtonStyles = css`
  background-color: ${primaryGray};
  color: #ffffff;
  `;
  
const lightButtonStyles = css`
  background-color: ${primaryTint};
  color: ${primaryGray};
`;


const getButtonStyles = props => {
  if (props.lightButton) {
    return lightButtonStyles;
  }

  return buttonStyles;
}

export const CustomButtonContainer = styled.button`
  font-size: 1.6rem;
  min-width: 14rem;
  width: auto;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  text-transform: capitalize;
  letter-spacing: 0.8px;

  border: none;
  outline: none;
  transition: all 0.3s;

  disply: flex;
  justify-content: center;

  &:hover {
    transform: translateY(-0.3rem); 
  }

  ${getButtonStyles};
`;
