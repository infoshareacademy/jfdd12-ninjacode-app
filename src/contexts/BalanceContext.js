import React, { createContext } from 'react'
import mockData from "../mockData.json";

const BalanceContext = createContext()

export class BalanceProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: mockData,
            balance: {
                saldo: (
                    this.incomesValue(mockData) - this.expensesValue(mockData)
                ).toFixed(2),
                incomes: this.incomesValue(mockData),
                expenses: this.expensesValue(mockData)
            }
        };

        this.onFormInput = this.onFormInput.bind(this);
    }

    componentDidMount() {
        this.setState(state => {
            return {
                balance: {
                    saldo: (
                        this.incomesValue(state.data) - this.expensesValue(state.data)
                    ).toFixed(2),
                    incomes: this.incomesValue(state.data),
                    expenses: this.expensesValue(state.data)
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
        this.setState(function (state, props) {
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
        return <BalanceContext.Provider value={{
            onFormInput: this.onFormInput,
            data: this.state.data,
            balance: this.state.balance
        }} {...this.props} />
    }
}

export const BalanceConsumer = BalanceContext.Consumer