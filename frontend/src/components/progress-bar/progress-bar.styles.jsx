import styled, {css} from 'styled-components';

const primaryTint = '#ECF0FA';
const primaryColor = '#303778';
const secondaryColor = '#EE3F5F';
const thirdColor = '#57CD9B';


const sizeStyles = css`
  height: 3rem;
  border-radius: 1rem;
`;

const inProgressStyles = css`
  background-color: ${primaryColor};
`;

const overdueStyles = css`
  background-color: ${secondaryColor};
  `;
  
const completedStyles = css`
  background-color: ${thirdColor};
`;

export const ProgressBarContainer = styled.div`
  background-color: ${primaryTint};
  width: 30rem;
  ${sizeStyles};

  position: relative;
`;

export const FillerContainer = styled.div`
  width: 100%;
  ${sizeStyles};
  transition: width 0.3s ease-in;
  // TODO to change for inprogress, overdue, completed
  ${overdueStyles};

  position: relative;
  `;
  
  export const PercentageContainer = styled.span`
  color: #ffffff;
  font-size: 1.8rem;

  position: absolute;
  top: 0.4rem;
  left: 1rem;
`;