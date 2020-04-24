import React from 'react';

// styled components
import { AddAccountsContainer } from './add-account.styles';

// components
import TitlePageWithSubHeading from '../../components/subheading/subheading.component';

class AddAccountsPage extends React.Component {
  state = {
    labels: [
      {id: 1, name: 'account name'},
      {id: 2, name: 'date'},
      {id: 3, name: 'initial amount'}
    ]
  }

  render() {
    const { labels } = this.state;
    return(
      <AddAccountsContainer>
        <TitlePageWithSubHeading
          title="Accounts"
          subheading="Adding new account"
          labels={labels}
        />
      </AddAccountsContainer>
    )
  }
}

export default AddAccountsPage;