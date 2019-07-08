import React, { useState } from "react";
import "./App.css";
import ReactTable from 'react-table';
import InfiniteCalendar from "react-infinite-calendar";
import { Button, Icon, Label } from "semantic-ui-react";
import { BarChartBalance } from "./components/BarChartBalance";
import { PieChartBalance } from "./components/PieChartBalance";
import "react-infinite-calendar/styles.css";
import 'react-table/react-table.css';


var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

let data = [
  {
    name: "Zakup mebli",
    category: "dom i ogród",
    transactionDate: "23-03-2019",
    type: "wydatki",
    amount: 3499
  },
  {
    name: "Spożywcze",
    category: "żywność i chemia",
    transactionDate: "25-03-2019",
    type: "wydatki",
    amount: 251
  },
  {
    name: "opłata czynszu",
    category: "opłaty i odsetki",
    transactionDate: "01-04-2019",
    type: "wydatki",
    amount: 1500
  },
  {
    name: "Aerobik-kwiecień",
    category: "zajęcia dodatkowe",
    transactionDate: "02-04-2019",
    type: "wydatki",
    amount: 210
  },
  {
    name: "pensja",
    category: "pensja",
    transactionDate: "04-04-2019",
    type: "wpływy",
    amount: 6500
  },
  {
    name: "odsetki od lokaty",
    category: "inwestycje",
    transactionDate: "06-04-2019",
    type: "wpływy",
    amount: 34.57
  }]

function App() {
  const [balance, useBalance] = useState({
    saldo: 13000,
    income: 12000,
    expenses: 1000
  })
  return (
    <div className='App'>
      <h1>cashBake - planer finansowy</h1>
      {/* <InfiniteCalendar
        width={400}
        height={600}
        selected={today}
        disabledDays={[0, 6]}
        minDate={lastWeek}
      /> */}
      <button class='ui button'>Click Here</button>
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic pointing='left'>
          2,048
        </Label>
      </Button>
      <div>
        <h1>SALDO:{balance.saldo}</h1>
        <h2>Przychody:{balance.income}</h2>
        <h2>Wydatki:{balance.expenses}</h2>
      </div>

      <ReactTable
        data={data}
        columns={[
          {
            Header: 'Nazwa',
            accessor: 'name'
          }, {
            Header: 'Kategoria',
            accessor: 'category',
          }, {
            Header: 'Data',
            accessor: 'transactionDate'
          },
          {
            id: 'typeID',
            Header: 'Typ',
            accessor: 'type'
          },
          {
            id: 'amountID',
            Header: 'Kwota',
            accessor: 'amount'
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
      <BarChartBalance/>
      <PieChartBalance balance={balance}/>
      </div>
  );
}

export default App;
