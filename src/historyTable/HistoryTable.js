import React, { useState } from "react";
import data from "./mockData.json";
import "react-table/react-table.css";
import { makeStyles } from '@material-ui/core/styles';

import "./HistoryTable.module.css";
import ReactTable from "react-table";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';


function filteredTableSum(data) {
  let tableSum = 0
  for (let i = 0; i <= data.length - 1; i++) {
    // console.log(data[i].amount)
    if (data[i].type === 'wydatki') {
      tableSum -= data[i].amount
    }
    else if (data[i].type === 'wpływy') {
      tableSum += data[i].amount
    }
  }
  console.log('tableSum = ', tableSum)
  return tableSum
}

const getColumns = data => {
  return [
    {
      Header: "Nazwa",
      accessor: "name",
      style: { textAlign: 'center' }
    },
    {
      Header: "Kategoria",
      accessor: "category",
      style: { textAlign: 'center' },
    },
    {
      Header: "Data",
      accessor: "transactionDate",
      style: { textAlign: 'center' },
    },
    {
      id: "typeID",
      Header: "Typ",
      accessor: "type",
      style: { textAlign: 'center' },
      Footer: <strong>SUMA:</strong>
    },
    {
      id: "amountID",
      Header: "Kwota",
      accessor: "amount",
      style: { textAlign: 'center' },
      Footer: <strong>{filteredTableSum(data)}</strong>
    }
  ]
}

export class HistoryTable extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data,
      filteredData: data,
      search: ''
    }
  }

  onSearch = (e) => {
    this.setState({ search: e.target.value });
    console.log(this.state.search)
    if (this.state.search) {
      this.setState((prevState, nextState) => {
        return {
          filteredData: prevState.data.filter(row => {
            return row.name.toLowerCase().includes((prevState.search).toLowerCase()) || row.category.toLowerCase().includes(prevState.search.toLowerCase()) || String(row.amount).includes(prevState.search)
          }),
        }
      })
    }
  }

  render() {

    return (
      <div>
        <h1>Historia transakcji</h1>
        Wyszukaj: <input
          value={this.state.search} onChange={this.onSearch}
        />


        <ReactTable
          data={this.state.filteredData}
          columns={getColumns(this.state.filteredData)}
          showPagination={false}
          minRows={1}
          noDataText={'Nie znaleziono transakcji'}
        />
      </div>
    )
  }
}
