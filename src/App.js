import React, { useState } from "react";
import "./App.css";
import ReactTable from 'react-table';
import InfiniteCalendar from "react-infinite-calendar";
import { Button, Icon, Label } from "semantic-ui-react";
import "react-infinite-calendar/styles.css";
import 'react-table/react-table.css';
import data from './mockData.json'

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);


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
      /></div>
  );
}

export default App;
