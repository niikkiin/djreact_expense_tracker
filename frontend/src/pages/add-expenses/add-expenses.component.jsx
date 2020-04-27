import React from "react";

// styled components
import {
  AddExpenseContainer,
  SubmitButtonContainer,
} from "./add-expenses.styles";
import DatePicker from "react-datepicker";

// components
import Forms from "../../components/forms/forms.component";
import FormInput from "../../components/form-input/form-input.component";
import "react-datepicker/dist/react-datepicker.css";

import { connect } from "react-redux";
import { addTransaction } from "../../redux/transactions/transaction.actions";

class AddExpensesPage extends React.Component {
  state = {
    name: "",
    date: new Date(),
    account: "",
    amount: "",
    category: "",
    note: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let { name, date, account, amount, category, note } = this.state;
    const month =
      date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    date = date.getFullYear() + "-" + month + "-" + date.getDate();
    const transactions = { name, date, account, amount, category, note };

    this.props.addTransaction(transactions);

    try {
      console.log("name: ", name);
      console.log("date: ", date);
      console.log("account: ", account);
      console.log("total amount: ", amount);
      console.log("category: ", category);
      console.log("note: ", note);

      this.setState({
        name: "",
        date: new Date(),
        account: "",
        amount: "",
        category: "",
        note: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  dateChangedHandler = (date) => {
    this.setState({
      date: date,
    });
  };

  render() {
    const { name, date, account, amount, category, note } = this.state;

    return (
      <AddExpenseContainer>
        <Forms title="Transactions" subheading="Adding new transaction">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="name"
              type="text"
              handleChange={this.handleChange}
              value={name}
              label="Transation Name"
              required
            />
            <DatePicker
              onChange={this.dateChangedHandler}
              selected={date}
              dateFormat="yyyy-MM-dd"
              className="datepicker"
              isClearable
              placeholderText="Click to select a date"
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "5px, 10px",
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: "viewport",
                },
              }}
            />
            <FormInput
              name="account"
              type="text"
              handleChange={this.handleChange}
              value={account}
              label="Account"
              required
            />
            <FormInput
              name="amount"
              type="number"
              handleChange={this.handleChange}
              value={amount}
              label="Total Amount"
              required
            />
            <FormInput
              name="category"
              type="text"
              handleChange={this.handleChange}
              value={category}
              label="Category"
              required
            />
            <FormInput
              name="note"
              type="textarea"
              handleChange={this.handleChange}
              value={note}
              label="Note"
            />
            <SubmitButtonContainer addButton onClick={this.handleSubmit}>
              Add
            </SubmitButtonContainer>
          </form>
        </Forms>
      </AddExpenseContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (transactions) => dispatch(addTransaction(transactions)),
  };
};

export default connect(null, mapDispatchToProps)(AddExpensesPage);
