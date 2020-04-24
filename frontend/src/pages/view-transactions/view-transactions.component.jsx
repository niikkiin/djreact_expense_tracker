import React from 'react';

// components
import OverView from '../../components/overview/overview.component';

class ViewTransactionsPage extends React.Component {
  state = {
    tableHeadings: [
      {id: 1, name: 'Transaction Name'},
      {id: 2, name: 'Account'},
      {id: 3, name: 'Category'},
      {id: 4, name: 'Created By'},
      {id: 5, name: 'Amount'},
      {id: 6, name: 'Date'},
    ],
    addButton: '/add-expense'
  }

  render(){
    const { tableHeadings, addButton } = this.state;
    return (
    <div>
      <OverView 
        title="Transactions Overview"
        buttonTitle="New Transaction"
        tableHeadings={tableHeadings}
        buttonLink={addButton}
      />
    </div>
    )
  }
}

export default ViewTransactionsPage;