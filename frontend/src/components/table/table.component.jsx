import React from 'react';

// styled components
import { TableWrapper, TableContainer, TableHeadContainer, TableBodyContainer } from './table.styles';

class Table extends React.Component {
  constructor(props) {
    super(props)
    // TODO to be changed later
    this.state = {
      items: [
        { id: 1, itemName: 'soap', itemQuantity: 2, itemPrice: 20, itemDescription: 'none'},
        { id: 2, itemName: 'soap', itemQuantity: 2, itemPrice: 20, itemDescription: 'none'},
        { id: 3, itemName: 'soap', itemQuantity: 2, itemPrice: 20, itemDescription: 'none'},
        { id: 4, itemName: 'soap', itemQuantity: 2, itemPrice: 20, itemDescription: 'none'},
      ]
    }
  }
  
  renderTableData() {
    return this.state.items.map((item, idx) => {
      const { id, itemName, itemQuantity, itemPrice, itemDescription } = item;
      return (
        <tr key={id}>
          <td>{itemName}</td>
          <td>{itemQuantity}</td>
          <td>{itemPrice}</td>
          <td>{itemDescription}</td>
        </tr>
      )
    })
  }

	render() {
		return (
			<TableWrapper>
				<TableContainer>
					<TableHeadContainer>
						<th>
							Item Name<span>*</span>
						</th>
						<th>
							Quantity<span>*</span>
						</th>
						<th>
							Price<span>*</span>
						</th>
						<th>Description</th>
					</TableHeadContainer>
					<TableBodyContainer>
						{this.renderTableData()}
					</TableBodyContainer>
				</TableContainer>
			</TableWrapper>
		);
	}
}

export default Table;
