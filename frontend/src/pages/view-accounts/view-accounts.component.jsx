import React from 'react';

// components
import OverView from '../../components/overview/overview.component';

class ViewAccountsPage extends React.Component {
	state = {
		tableHeadings: [
			{ id: 1, name: 'Account Name' },
			{ id: 2, name: 'Current Balance' },
			{ id: 3, name: 'Made By' },
			{ id: 4, name: 'Date' },
			{ id: 5, name: 'Status' }
		],
		buttonLink: 'add-account'
	};

	render() {
    const { tableHeadings, buttonLink } = this.state;
		return (
			<div>
        <OverView 
          title='Accounts Overview'
          buttonTitle='New Account'
					tableHeadings={tableHeadings}
					buttonLink={buttonLink}
        />
			</div>
		);
	}
}

export default ViewAccountsPage;
