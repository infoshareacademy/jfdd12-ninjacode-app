import mockData from "../mockData.json";
import { useState } from "react";

export default function useData() {
  const [data, setData] = useState(mockData);
  console.log(data);
  function expensesValue() {
    // mockData.filter(row => row.type === "wydatki").reduce((a, b) => ({amount: a.amount + b.amount}));
    return data
      .filter(row => row.type === "wydatki")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
  }

  function incomesValue() {
    // mockData.filter(row => row.type === "wydatki").reduce((a, b) => ({amount: a.amount + b.amount}));
    return data
      .filter(row => row.type === "wpływy")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
  }

  return {
    // data,
    saldo: (incomesValue() - expensesValue()).toFixed(2),
    incomes: incomesValue(),
    expenses: expensesValue(),
    addExpense: props => {
      console.log(props);
      setData([...data, props]);
    }
  };
}
