import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import BottomAppBar from "./BottomAppBar";
import * as serviceWorker from "./serviceWorker";
import { HistoryTable } from "./historyTable/HistoryTable";
import { Dashboard } from "./components/Dashboard";
import { Wykresy } from "./components/Wykresy";
import mockData from "./mockData.json";
import { func } from "prop-types";

const NoMatch = () => <p>404</p>;

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockData,
      balance: {
        saldo: 0,
        incomes: 0,
        expenses: 0
      }
    };
  }

  componentDidMount() {
    this.loadData();
    console.log("loadData didMount");
  }

  loadData() {
    const balance = this.reloadBalance();
    console.log("add balance to state: ");
    console.log(balance);
    this.setState(prevState => ({ data: prevState.data, balance }));
  }
  reloadBalance() {
    const incomes = this.incomesValue();
    const expenses = this.expensesValue();
    // this.setState((prevState) => {balance: {...prevState,}})
    const balance = {
      saldo: incomes - expenses,
      incomes,
      expenses
    };
    console.log("loadData completed,\n balanceObj: ");
    console.log(balance);
    return balance;
  }

  expensesValue() {
    // mockData.filter(row => row.type === "wydatki").reduce((a, b) => ({amount: a.amount + b.amount}));
    const expenses = this.state.data
      .filter(row => row.type === "wydatki")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
    console.log(`suma wpływów: ${expenses}`);
    return expenses;
  }

  incomesValue() {
    // mockData.filter(row => row.type === "wydatki").reduce((a, b) => ({amount: a.amount + b.amount}));
    const incomes = this.state.data
      .filter(row => row.type === "wpływy")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
    console.log(`suma wpływów: ${incomes}`);
    return incomes;
  }
  onFormInput(ItemExpense) {
    console.log("dodaje pozycje ");
    console.log(ItemExpense);
    this.setState(prevState => ({
      data: [...prevState.data, ItemExpense],
      balance: this.reloadBalance()
    }));
    // metoda do rekalkulacji;
  }
  render() {
    this.onFormInput = this.onFormInput.bind(this);
    console.log(this.state);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Dashboard balance={this.state.balance} />}
          />
          <Route path='/history' component={HistoryTable} />
          <Route path='/wykresy' component={Wykresy} />
          <Route component={NoMatch} />
        </Switch>
        <h1 />
        <h1 />
        <BottomAppBar onFormInput={this.onFormInput} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
