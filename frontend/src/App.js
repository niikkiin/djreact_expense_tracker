import React from "react";
import "./App.css";

// routing
import { Switch, Route } from "react-router-dom";

// components
import Sidebar from "./components/sidebar/sidebar.component";

// pages
import HomePage from "./pages/homepage/homepage.component";
import ViewTransactionsPage from "./pages/view-transactions/view-transactions.component";
import ViewAccountsPage from "./pages/view-accounts/view-accounts.component";
import ViewGoalsPage from "./pages/view-goals/view-goals.component";
import ViewReportsPage from "./pages/view-reports/view-reports.component";

// NOTE for demo only
import Modal from "./components/modal/modal.component";

class App extends React.Component {
  state = {
    modalToggle: true,
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      // modalToggle: true
      modalToggle: !this.state.modalToggle,
    });
  };

  render() {
    const { modalToggle } = this.state;
    return (
      <div className="container">
        <Sidebar />

        <div className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/view-transaction"
              component={ViewTransactionsPage}
            />
            <Route exact path="/view-account" component={ViewAccountsPage} />
            <Route exact path="/view-goal" component={ViewGoalsPage} />
            <Route exact path="/view-report" component={ViewReportsPage} />
          </Switch>

          <Modal show={modalToggle} modalClosed={this.modalHandler}>
            {/* TODO change to a component */}
          </Modal>
          <button onClick={this.modalHandler}>Show Modal</button>
        </div>
      </div>
    );
  }
}

export default App;
