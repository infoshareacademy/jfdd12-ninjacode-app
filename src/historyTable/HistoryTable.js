import React from 'react';
import 'react-table/react-table.css';
import data from './mockData.json'
import ReactTable from 'react-table'
import { FilterButton } from './HistoryFilter'
import styles from "./HistoryTable.module.css"

export function HistoryTable(props) {
    let { className } = props

    return <div><div className={styles.filterSection}>

        {/* <div className={styles.textBox}>Wyszukaj</div> */}
        <input />
        <FilterButton >Filtruj po nazwie lub kwocie</FilterButton>
        <FilterButton >Filtruj po kategorii</FilterButton>
        <FilterButton >Filtruj po dacie</FilterButton>

    </div>
        <ReactTable filterable
            showPagination={false}
            showPageSizeOptions={false}
            minRows={3}
            data={data}
            columns={[
                {
                    Header: 'Nazwa',
                    accessor: 'name',
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
                    accessor: 'amount',
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        /></div >
}

