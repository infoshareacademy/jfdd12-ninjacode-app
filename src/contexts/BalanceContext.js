import React, { createContext } from "react";
// import mockData from "../mockData.json";
import { fetchData, sendData } from "../services/DataService.js";
import firebase from "firebase/app";

const BalanceContext = createContext();

export class BalanceProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      balance: {
        saldo: 0,
        incomes: 0,
        expenses: 0
      },
      incomesCategories: {},
      expensesCategories: {}
    };

    this.onFormInput = this.onFormInput.bind(this);
    this.incomesCategories = this.incomesCategories.bind(this);
    this.expensesCategories = this.expensesCategories.bind(this);
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
            },
            incomesCategories: this.incomesCategories(dataArray),
            expensesCategories: this.expensesCategories(dataArray)
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

  incomesCategories(entries) {
    const data = entries
      .filter(row => row.type === "wpływy")
      .reduce((acc, row) => {
        const oldAmount = row.value || 0;
        return { ...acc, [row.category]: oldAmount + row.amount };
      }, {});

    return data;
  }
  expensesCategories(entries) {
    const data = entries
      .filter(row => row.type === "wydatki")
      .reduce((acc, row) => {
        const oldAmount = row.value || 0;
        return { ...acc, [row.category]: oldAmount + row.amount };
      }, {});

    return data;
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
          balance: this.state.balance,
          incomesCategories: this.state.incomesCategories,
          expensesCategories: this.state.expensesCategories
        }}
        {...this.props}
      />
    );
  }
}

export const BalanceConsumer = BalanceContext.Consumer;
