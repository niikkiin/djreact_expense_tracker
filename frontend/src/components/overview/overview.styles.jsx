import styled from 'styled-components';

// components
import CustomButton from '../custom-button/custom-button.component';


// routing
import { Link } from 'react-router-dom';

const primaryGrayColor = '#8F9297';

export const OverViewContainer = styled.div`
  
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 4rem;
  
  h1 {
    margin-right: 2rem; 
  }
`;

export const CustomButtonContainer = styled(CustomButton)`
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
  }

  .icon {
    color: ${primaryGrayColor};
    font-size: 2.4rem;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;