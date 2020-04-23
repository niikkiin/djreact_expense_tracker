import styled, {css} from 'styled-components';

const successColor = '#57CD9B';
const warningColor = '#EE3F5F';

const successBadgeStyles = css`
  background-color: ${successColor};
`;

const warningBadgeStyles = css`
  background-color: ${warningColor};
`;

export const BadgeContainer = styled.span`
  text-transform: capitalize;
  color: #fff;
  border-radius: 0.5rem;
  padding: 2px 1rem;

  // TODO if else for success or warning
  ${successBadgeStyles};
`;