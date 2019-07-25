import React, { createContext } from "react";
// import mockData from "../mockData.json";
import { fetchData, sendData } from "../services/DataService.js";
import firebase from "firebase";

const BalanceContext = createContext();

export class BalanceProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [""],
      balance: {
        saldo: 0,
        incomes: 0,
        expenses: 0
      }
    };

    this.onFormInput = this.onFormInput.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        fetchData(dataArray => {
          return this.setState({
            data: dataArray,
            balance: {
              saldo: (
                this.incomesValue(dataArray) - this.expensesValue(dataArray)
              ).toFixed(2),
              incomes: this.incomesValue(dataArray),
              expenses: this.expensesValue(dataArray)
            }
          });
        });
      }
    });
  }

  expensesValue(entries) {
    // mockData.filter(row => row.type === "wydatki").reduce((a, b) => ({amount: a.amount + b.amount}));
    const expenses = entries
      .filter(row => row.type === "wydatki")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);

    return expenses;
  }

  incomesValue(entries) {
    const incomes = entries
      .filter(row => row.type === "wpływy")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
    return incomes;
  }
  onFormInput(ItemExpense) {
    sendData(ItemExpense);
  }

  render() {
    return (
      <BalanceContext.Provider
        value={{
          onFormInput: this.onFormInput,
          data: this.state.data,
          balance: this.state.balance
        }}
        {...this.props}
      />
    );
  }
}

export const BalanceConsumer = BalanceContext.Consumer;
