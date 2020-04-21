import styled, {css} from 'styled-components';

const primaryGray = '#8F9297';
const primaryTint = '#ECF0FA';
const primaryColor = '#303778';

const linkStyles = css`
  color: ${primaryGray};
  font-size: 1.6rem;
  padding: 1rem 1rem;

  display: flex;
  align-items: center;

  .icon {
    color: ${primaryGray};
    margin-right: 1.5rem;
    font-size: 2rem;
  }

  transition: all 0.3s;
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #fff;

  border-radius: 4rem 0px 0px 4rem;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpperContentContainer = styled.div`
  // margin-right: auto;
`;

// STUB logo
export const LogoContainer = styled.div`
  // height: 100%;
`;

// STUB nav
export const NavContainer = styled.nav`
  width: 100%;
`;

export const SideNav = styled.ul`

  font-weight: 600;
  list-style: none;
  margin-top: 3rem;
`;

export const NavItem = styled.li`
  border-radius: 1rem;
  margin: 0 0 1rem 0;


  &:hover {
    cursor: pointer;
    background-color: ${primaryTint};
    border-radius: 1rem;

    .icon,
    span {
      background-color: ${primaryTint};
      color: ${primaryColor};
    }
  }

  &.active {
    background-color: ${primaryTint};

    .icon,
    span{
      color: ${primaryColor};
    }

  }
`;

//NOTE: href to be changed later
export const NavLink = styled.div`
  ${linkStyles};
`;

export const LowerContentContainer = styled.div`
  ${linkStyles};

  &:hover {
    cursor: pointer;
    
    .icon,
    span {
      color: ${primaryColor};
    }
`;