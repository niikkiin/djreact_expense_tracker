import styled, {css} from 'styled-components';

const primaryTint = '#4F78E0';
const secondaryTint = '#F6B7CE';
const thirdTint = '#86E9BF';
const primaryColor = '#303778';
const secondaryColor = '#EE3F5F';
const thirdColor = '#57CD9B';

const inProgressStyles = css`
  background-color: ${primaryTint};
`;
const overdueStyles = css`
  background-color: ${secondaryTint};
`;
const completedStyles = css`
  background-color: ${thirdTint};
`;

const containerStyles = css`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;

export const CardGoalsContainer = styled.div`
  width: 100%;
  height: 9rem;
  border-radius: 1rem;

  ${overdueStyles};

  position: relative;

  display: flex;
  justify-content: space-between;
`;

export const ContainerOne = styled.div`
  ${containerStyles};
`;

export const ContainerTwo = styled.div`
  ${containerStyles};
`;
  
export const GoalsContainer = styled.div`
  color: #ffffff;
  margin: 1.5rem;
  `;
  
export const GoalTitle = styled.h1`
  color: inherit;
  font-size: 3rem;
  font-weight: 600;
  text-decoration: underline;
  `;
  
export const TaskNumber = styled.h3`
  color: inherit;
  font-size: 1.7rem;
  font-weight: 600;
`;
  
export const DateContainer = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  color: #fff;
  color: #ffffff;
  margin: 1.5rem;
`;