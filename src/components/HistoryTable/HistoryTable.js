import React from "react";
import "react-table/react-table.css";
import styles from "./HistoryTable.module.css";
import ReactTable from "react-table";
import { BalanceConsumer } from "../../contexts/BalanceContext";
import { Layout } from "../Layout";

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

function filterData(data, search, type) {
  return data
    .filter(row => {
      if (row.type === type) {
        return true;
      } else if (type === "wszystkie") {
        return true;
      }
    })
    .filter(row => {
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
      style: { textAlign: "left", paddingLeft: "10px" }
    },
    {
      Header: "Kategoria",
      accessor: "category",
      style: { textAlign: "left", paddingLeft: "10px" }
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
      style: { textAlign: "right", paddingRight: "10px" },
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
      search: "",
      selectedFilter: "wszystkie"
    };
  }

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  onTypeChange = e => {
    this.setState({ selectedFilter: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <Layout title={"Historia transakcji"}>
        <BalanceConsumer>
          {({ data }) => {
            const filteredData = filterData(
              data,
              this.state.search,
              this.state.selectedFilter
            );
            return (
              <div className={styles.historyContainer}>
                <div className={styles.historyFind}>
                  Wyszukaj:{" "}
                  <input value={this.state.search} onChange={this.onSearch} />{" "}
                  Typ:{" "}
                  <select
                    name="type"
                    value={this.state.value}
                    onChange={this.onTypeChange}
                  >
                    <option value="wszystkie">Wszystkie</option>
                    <option value="wydatki">Wydatki</option>
                    <option value="wpływy">wpływy</option>
                  </select>
                </div>
                <ReactTable
                  data={filteredData}
                  columns={getColumns(filteredData)}
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
                            ? "rgba(255, 200, 200, 0.8)"
                            : "rgba(0, 100, 200, 0.2)"
                      }
                    };
                  }}
                  noDataText={"Nie znaleziono transakcji"}
                />
              </div>
            );
          }}
        </BalanceConsumer>
      </Layout>
    );
  }
}
