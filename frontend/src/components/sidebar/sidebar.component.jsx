import React from 'react';

// styled components
import { 
  SidebarContainer,
  UpperContentContainer,
  LogoContainer,
  NavContainer,
  SideNav,
  NavItem,
  NavLinkContainer,
  LowerContentContainer
} from './sidebar.styles';

// logo
import { ReactComponent as Logo } from '../../assets/kittybank.svg';

// icons
import { InlineIcon } from '@iconify/react';
import homeIcon from '@iconify/icons-icomoon-free/home';
import usersIcon from '@iconify/icons-icomoon-free/users';
import clipboardIcon from '@iconify/icons-icomoon-free/clipboard';
import statsBars from '@iconify/icons-icomoon-free/stats-bars';
import creditCard from '@iconify/icons-icomoon-free/credit-card';
import exitIcon from '@iconify/icons-icomoon-free/exit';

const Sidebar = () => (
	<SidebarContainer>
    {/* NOTE: to be moved to its own component */}
		<UpperContentContainer>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<NavContainer>
				<SideNav>
					<NavItem>
            <NavLinkContainer exact to='/' activeClassName='is-active'>
              <InlineIcon className='icon' icon={homeIcon} />
              <span>Home</span>
            </NavLinkContainer>
					</NavItem>
					<NavItem>
            <NavLinkContainer exact to='/view-transaction' activeClassName='is-active'>
              <InlineIcon className='icon' icon={creditCard} />
              <span>Transactions</span>
            </NavLinkContainer>
					</NavItem>
					<NavItem>
            <NavLinkContainer exact to='/view-account' activeClassName='is-active'>
              <InlineIcon className='icon' icon={usersIcon} />
              <span>Accounts</span>
            </NavLinkContainer>
					</NavItem>
					<NavItem>
            <NavLinkContainer exact to='/view-goal' activeClassName='is-active'>
              <InlineIcon className='icon' icon={clipboardIcon} />
              <span>Goals</span>
            </NavLinkContainer>
					</NavItem>
					<NavItem>
            <NavLinkContainer exact to='/view-report' activeClassName='is-active'>
              <InlineIcon className='icon' icon={statsBars} />
              <span>Reports</span>
            </NavLinkContainer>
					</NavItem>
				</SideNav>
			</NavContainer>
		</UpperContentContainer>
    <LowerContentContainer>
      <InlineIcon className='icon' icon={exitIcon} />
      <span>Logout</span>
    </LowerContentContainer>
	</SidebarContainer>
);

export default Sidebar;
