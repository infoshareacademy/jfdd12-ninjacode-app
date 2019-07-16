import React from "react";
import "react-table/react-table.css";
import "./HistoryTable.module.css";
import ReactTable from "react-table";

function filteredTableSum(data) {
  let tableSum = 0;
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i].type === "wydatki") {
      tableSum -= data[i].amount;
    } else if (data[i].type === "wpływy") {
      tableSum += data[i].amount;
    }
  }
  return tableSum.toFixed(2);
}

function filterData(data, search) {
  return data.filter(row => {
    if (search) {
      return (
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.category.toLowerCase().includes(search.toLowerCase()) ||
        String(row.amount).includes(search)
      );
    } else return true;
  });
}

const getColumns = data => {
  return [
    {
      Header: "Nazwa",
      accessor: "name",
      style: { textAlign: "center" }
    },
    {
      Header: "Kategoria",
      accessor: "category",
      style: { textAlign: "center" }
    },
    {
      Header: "Data",
      accessor: "transactionDate",
      style: { textAlign: "center" }
    },
    {
      id: "typeID",
      Header: "Typ",
      accessor: "type",
      style: { textAlign: "center" },
      Footer: <strong>SUMA:</strong>
    },
    {
      id: "amountID",
      Header: "Kwota",
      accessor: "amount",
      style: { textAlign: "center" },
      Footer: <strong>{filteredTableSum(data)}</strong>
    }
  ];
};

export class HistoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      filteredData: props.data,
      search: ""
    };
  }

  onSearch = e => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
    if (this.state.search) {
      this.setState((prevState, nextState) => {
        return {
          filteredData: filterData(prevState.data, prevState.search)
        };
      });
    }
  };

  render() {
    const transactions = filterData(this.props.data, this.state.search);

    return (
      <div>
        <h1>Historia transakcji</h1>
        Wyszukaj: <input value={this.state.search} onChange={this.onSearch} />
        <ReactTable
          data={transactions}
          columns={getColumns(transactions)}
          showPagination={false}
          minRows={1}
          noDataText={"Nie znaleziono transakcji"}
        />
      </div>
    );
  }
}
