import styled, {css} from 'styled-components';

const primaryColor = '#303778';
const secondaryColor = '#EE3F5F';
const thirdColor = '#57CD9B';

const inProgressStyles = css`
  background-color: ${primaryColor};
`;
const overdueStyles = css`
  background-color: ${secondaryColor};
`;
const completedStyles = css`
  background-color: ${thirdColor};
`;

export const PriorityBoxContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  ${overdueStyles};

  // position: absolute;
  // top: 1.5rem;
  // left: 1.5rem;

  // margin: 1.5rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.5rem;
    color: #ffffff;
  }
`;