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
import AddExpensesPage from './pages/add-expenses/add-expenses.component';
import AddAccountsPage from './pages/add-account/add-account.component';

// NOTE for demo only

class App extends React.Component {


  render() {
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

            {/* add forms */}
            <Route exact path="/add-expense" component={AddExpensesPage} />
            <Route exact path="/add-account" component={AddAccountsPage} />
          </Switch>

          
        </div>
      </div>
    );
  }
}

export default App;
