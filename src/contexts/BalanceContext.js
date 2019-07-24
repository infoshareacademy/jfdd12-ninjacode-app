import React, { createContext } from "react";
// import mockData from "../mockData.json";
import { fetchData } from "../services/DataService.js";

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
    // const dataRef = fetchData(
    //   this.setState(dataArray => {
    //     return {
    //       ...this.state,
    //       data: dataArray
    //     };
    //   })
    // );
    fetchData(dataArray => {
      debugger;
      return {
        data: dataArray,
        balance: {
          saldo: (
            this.incomesValue(dataArray) - this.expensesValue(dataArray)
          ).toFixed(2),
          incomes: this.incomesValue(dataArray),
          expenses: this.expensesValue(dataArray)
        }
      };
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
    // mockData.filter(row => row.type === "wydatki").reduce((a, b) => ({amount: a.amount + b.amount}));
    const incomes = entries
      .filter(row => row.type === "wpływy")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
    return incomes;
  }
  onFormInput(ItemExpense) {
    this.setState(function(state, props) {
      const data = state.data.concat(ItemExpense);
      const balance = {
        saldo: (this.incomesValue(data) - this.expensesValue(data)).toFixed(2),
        incomes: this.incomesValue(data),
        expenses: this.expensesValue(data)
      };
      return {
        data,
        balance
      };
    });
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
