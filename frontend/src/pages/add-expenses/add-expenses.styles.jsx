import styled from 'styled-components';

// components
import CustomButton from '../../components/custom-button/custom-button.component';

const primaryGray = '#8F9297';
const primaryTint = '#ECF0FA';
const primaryColor = '#303778';
const primaryLight = '#4F78E0';

export const AddExpenseContainer = styled.div`

  .datepicker {
    background-color: ${primaryTint};
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    border: none;
    height: 4rem;
    border-radius:  1rem;
    padding: 0 0.5rem;
    color: ${primaryColor};
  
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${primaryGray};
      font-family: 'Muli', sans-serif;
      font-weight: 400;
    }
  }

`;

export const SubmitButtonContainer = styled(CustomButton)`

  &:focus,
  &:active {
    background-color: ${primaryLight};
    transform: translateY(-5px);
  }
`;