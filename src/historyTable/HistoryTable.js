import React from "react";
import data from "./mockData.json";
import { Paper } from "@material-ui/core";
import "react-table/react-table.css";

import { FilterButton } from "./HistoryFilter";
import styles from "./HistoryTable.module.css";
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

export function HistoryTable() {
  // let { className } = props;




  return (
    < Paper >
      <div>
        <div className={styles.filterSection}>
          <input />
          <FilterButton>Filtruj po kategorii</FilterButton>
          <FilterButton>Filtruj po dacie</FilterButton>
        </div>
        <ReactTable

          showPagination={false}
          showPageSizeOptions={false}
          minRows={3}
          data={data}
          className="-striped -highlight"
          columns={[
            {
              Header: "Nazwa",
              accessor: "name",
              style: { textAlign: 'center' }
            },
            {
              Header: "Kategoria",
              accessor: "category",
              style: { textAlign: 'center' }
            },
            {
              Header: "Data",
              accessor: "transactionDate",
              style: { textAlign: 'center' }
            },
            {
              id: "typeID",
              Header: "Typ",
              accessor: "type",
              style: { textAlign: 'center' }
            },
            {
              id: "amountID",
              Header: "Kwota",
              accessor: "amount",
              style: { textAlign: 'center' },
              Footer: <strong>{filteredTableSum()}</strong>
            }
          ]}
          defaultPageSize={10}
        //   className="-striped -highlight"
        />
      </div>
    </Paper >
  );
}
