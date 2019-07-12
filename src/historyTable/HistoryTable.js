import React, { useState } from "react";
import data from "./mockData.json";
import { Paper } from "@material-ui/core";
import "react-table/react-table.css";

import { FilterButton } from "./HistoryFilter";
import "./HistoryTable.module.css";
import ReactTable from "react-table";

console.log('---data in historyTable----')
console.log(data)


function filteredTableSum() {
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

// const ReactTable = window.ReactTable.default

const columns = [
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
    Footer: <strong>{filteredTableSum()}</strong>
  }
]
export class HistoryTable extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data,
      search: ''
    }
  }
  render() {
    let data = this.state.data
    if (this.state.search) {
      data = data.filter(row => {
        return row.name.toLowerCase().includes((this.state.search).toLowerCase()) || row.category.toLowerCase().includes(this.state.search.toLowerCase()) || String(row.amount).includes(this.state.search)
      })
    }
    return (
      <div>
        <h1>Historia transakcji</h1>
        Wyszukaj: <input
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <ReactTable
          data={data}
          columns={columns}
          showPagination={false}
          minRows={1}
        />
      </div>
    )
  }
}

