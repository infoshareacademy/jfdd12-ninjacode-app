import React from "react";
import "react-table/react-table.css";
import styles from "./HistoryTable.module.css";
import ReactTable from "react-table";
import { BalanceConsumer } from "../../contexts/BalanceContext";
import Container from "@material-ui/core/Container";
import { Header } from "../Header";

function filteredTableSum(data) {
  let tableSum = 0;
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i].type === "wydatki") {
      tableSum -= data[i].amount;
    } else if (data[i].type === "wpływy") {
      tableSum += data[i].amount;
    }
  }
  console.log("tableSum = ", tableSum);
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
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgray"
        }}
      >
        <Container
          maxWidth="sm"
          style={{ backgroundColor: "white", paddingTop: "20px" }}
        >
          <Header title={"Historia transakcji"} />
          <BalanceConsumer>
            {({ data }) => {
              const transactions = filterData(data, this.state.search);
              return (
                <div className={styles.historyContainer}>
                  <div className={styles.historyFind}>
                    Wyszukaj:{" "}
                    <input value={this.state.search} onChange={this.onSearch} />
                  </div>
                  <ReactTable
                    data={transactions}
                    columns={getColumns(transactions)}
                    showPagination={false}
                    minRows={1}
                    getTrProps={(state, rowInfo, column) => {
                      if (!rowInfo) {
                        return {};
                      }
                      return {
                        style: {
                          background:
                            rowInfo.original.type == "wydatki"
                              ? "rgba(255, 0, 0, 0.2)"
                              : "rgba(0, 255, 0, 0.2)"
                        }
                      };
                    }}
                    noDataText={"Nie znaleziono transakcji"}
                  />
                </div>
              );
            }}
          </BalanceConsumer>
        </Container>
      </div>
    );
  }
}
