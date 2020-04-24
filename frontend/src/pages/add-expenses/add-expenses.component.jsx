import React from "react";

// styled components
import { AddExpenseContainer } from "./add-expenses.styles";
import DatePicker from "react-datepicker";

// components
import Forms from "../../components/forms/forms.component";
import FormInput from "../../components/form-input/form-input.component";
import CalendarInput from "../../components/calendar-input/calendar-input.component";
import "react-datepicker/dist/react-datepicker.css";

class AddExpensesPage extends React.Component {
  state = {
    transactionName: "",
    date: new Date(),
    account: "",
    totalAmount: "",
    category: "",
    note: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      transactionName,
      date,
      account,
      totalAmount,
      category,
      note,
    } = this.state;

    try {
      this.setState({
        transactionName: "",
        date: "",
        account: "",
        totalAmount: "",
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
    const {
      transactionName,
      date,
      account,
      totalAmount,
      category,
      note,
    } = this.state;

    return (
      <AddExpenseContainer>
        <Forms title="Transactions" subheading="Adding new transaction">
          <CalendarInput />
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="transactionName"
              type="text"
              handleChange={this.handleChange}
              value={transactionName}
              label="Transation Name"
              required
            />
            <DatePicker
              selected={this.state.date}
              onChange={this.dateChangedHandler}
            />
            <FormInput
              name="date"
              type="date"
              handleChange={this.handleChange}
              value={date}
              label="Date"
              required
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
              value={totalAmount}
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
          </form>
        </Forms>
      </AddExpenseContainer>
    );
  }
}

export default AddExpensesPage;
