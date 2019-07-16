import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import BottomAppBar from "./BottomAppBar";
import * as serviceWorker from "./serviceWorker";
import { HistoryTable } from "./components/HistoryTable/HistoryTable";
import { Dashboard } from "./components/Dashboard";
import { Charts } from "./components/Charts";
import mockData from "./mockData.json";

const NoMatch = () => <p>404</p>;

class Root extends React.Component {
  state = {
    data: mockData,
    balance: {
      saldo: (
        this.incomesValue(mockData) - this.expensesValue(mockData)
      ).toFixed(2),
      incomes: this.incomesValue(mockData),
      expenses: this.expensesValue(mockData)
    }
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: mockData,
  //     balance: {
  //       saldo: (
  //         this.incomesValue(mockData) - this.expensesValue(mockData)
  //       ).toFixed(2),
  //       incomes: this.incomesValue(mockData),
  //       expenses: this.expensesValue(mockData)
  //     }
  //   };

  //   this.onFormInput = this.onFormInput.bind(this);
  // }

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
    const expenses = entries
      .filter(row => row.type === "wydatki")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);

    return expenses;
  }

  incomesValue(entries) {
    console.log(entries)
    const incomes = entries
      .filter(row => row.type === "wpływy")
      .reduce((acc, curr) => {
        return (acc = acc + curr.amount);
      }, 0);
    return incomes;
  }

  onFormInput(ItemExpense) {
    console.log(this)
    this.setState((state, props) => {
      const data = state.data.concat(ItemExpense);
      console.log(this)
      const val1 = this.incomesValue(data)
      const val2 = this.expensesValue(data).toFixed(2)

      const val4 = this.expensesValue(data)

      const balance = {
        saldo: (val1 - val2),
        incomes: val1,
        expenses: val4
      };
      return {
        data,
        balance
      };
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Dashboard balance={this.state.balance} />}
          />
          <Route
            path="/History"
            render={() => <HistoryTable data={this.state.data} />}
          />
          <Route
            path="/Charts"
            render={() => <Charts data={this.state.data} />}
          />
          <Route component={NoMatch} />
        </Switch>
        <h1 />
        <h1 />
        <BottomAppBar onFormInput={() => this.onFormInput()} />
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
