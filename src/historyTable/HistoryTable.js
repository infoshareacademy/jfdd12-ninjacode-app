import React from 'react';
// import 'react-table/react-table.css';
import data from './mockData.json'
import ReactTable from 'react-table'


export function HistoryTable() {

    return <ReactTable
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

}