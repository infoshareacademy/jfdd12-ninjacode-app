import React from "react";
import "react-table/react-table.css";
import styles from "./HistoryTable.module.css";
import ReactTable from "react-table";
import { BalanceConsumer } from "../../contexts/BalanceContext";
import { Layout } from "../Layout";
import moment from "moment";
import Select from "@material-ui/core/Select";
import { MaterialUIPickers } from "../DatePickerExpenses";

const getColumns = data => {
  let thisWidth = window.innerWidth;
  return [
    {
      Header: "Nazwa",
      accessor: "name",
      minWidth: 90,
      style: { textAlign: "left", paddingLeft: "10px" }
    },
    {
      Header: "Kategoria",
      accessor: "category",
      minWidth: 70,
      style: { textAlign: "left", paddingLeft: "10px" },
      show: thisWidth > 400 ? true : false
    },
    {
      id: "typeID",
      Header: "Typ",
      accessor: "type",
      minWidth: 60,
      style: { textAlign: "center" },
      show: thisWidth > 450 ? true : false
    },
    {
      Header: "Data",
      accessor: "transactionDate",
      style: { textAlign: "center" },
      minWidth: 60,
      Footer: <strong>SUMA:</strong>
    },
    {
      id: "amountID",
      Header: "Kwota",
      accessor: "amount",
      minWidth: 60,
      style: { textAlign: "right", paddingRight: "10px" },
      Footer: <strong>{filteredTableSum(data)}</strong>,
      Cell: row => {
        return `${parseFloat(row.value).toFixed(2)} zł`;
      }
    }
  ];
};

function filteredTableSum(data) {
  let tableSum = 0;
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i].type === "wydatki") {
      tableSum -= data[i].amount;
    } else if (data[i].type === "wpływy") {
      tableSum += data[i].amount;
    }
  }
  return `${tableSum.toFixed(2)} zł`;
}

function filterData(
  data,
  search,
  type,
  amountFrom,
  amountTo,
  dateFrom,
  dateTo
) {
  return data
    .filter(row => {
      if (amountFrom !== "" && amountFrom >= 0) {
        return row.amount >= amountFrom;
      } else {
        return true;
      }
    })
    .filter(row => {
      if (amountTo !== "" && amountTo >= 0) {
        return row.amount <= amountTo;
      } else {
        return true;
      }
    })
    .filter(row => {
      if (row.type === type) {
        return true;
      } else if (type === "wszystkie") {
        return true;
      }
    })
    .filter(row => {
      if (dateFrom !== "") {
        return moment(row.transactionDate, "DD-MM-YYYY").isBetween(
          moment(dateFrom),
          undefined,
          "day",
          "[]"
        );
      } else {
        return true;
      }
    })
    .filter(row => {
      if (dateTo !== "") {
        return moment(row.transactionDate, "DD-MM-YYYY").isBetween(
          "1970-10-19",
          moment(dateTo),
          "day",
          "[]"
        );
      } else {
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

export class HistoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      filteredData: props.data,
      search: "",
      selectedFilter: "wszystkie",
      amountFrom: "",
      amountTo: "",
      dateFrom: "",
      dateTo: ""
    };
  }

  resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  onTypeChange = e => {
    this.setState({ selectedFilter: e.target.value });
  };

  onAmountFromChange = e => {
    this.setState({ amountFrom: e.target.value });
  };

  onAmountToChange = e => {
    this.setState({ amountTo: e.target.value });
  };

  onDateFromChange = e => {
    this.setState({ dateFrom: e });
  };

  onDateToChange = e => {
    this.setState({ dateTo: e });
  };

  onReset = () => {
    this.setState({
      data: this.data,
      filteredData: this.data,
      search: "",
      selectedFilter: "wszystkie",
      amountFrom: "",
      amountTo: "",
      dateFrom: "",
      dateTo: ""
    });
  };

  render() {
    return (
      <Layout title={"Historia transakcji"}>
        <BalanceConsumer>
          {({ data }) => {
            const filteredData = filterData(
              data,
              this.state.search,
              this.state.selectedFilter,
              this.state.amountFrom,
              this.state.amountTo,
              this.state.dateFrom,
              this.state.dateTo
            );
            return (
              <div className={styles.historyContainer}>
                <div className={styles.historyFind}>
                  Wyszukaj:{" "}
                  <input value={this.state.search} onChange={this.onSearch} />{" "}
                  Typ:{" "}
                  <Select
                    native
                    name="type"
                    value={this.state.selectedFilter}
                    onChange={this.onTypeChange}
                  >
                    <option value={"wszystkie"}>wszystkie</option>
                    <option value={"wydatki"}>wydatki</option>
                    <option value={"wpływy"}>wpływy</option>
                  </Select>
                  <div>
                    Kwota od:{" "}
                    <input
                      value={this.state.amountFrom}
                      onChange={this.onAmountFromChange}
                    />{" "}
                    Kwota do:{" "}
                    <input
                      value={this.state.amountTo}
                      onChange={this.onAmountToChange}
                    />{" "}
                  </div>
                  Data od:{" "}
                  <MaterialUIPickers
                    value={this.state.dateTo}
                    onDateSelected={this.onDateFromChange}
                  />
                  Data do:{" "}
                  <MaterialUIPickers
                    label="Date picker"
                    value={this.state.dateTo}
                    onDateSelected={this.onDateToChange}
                  />
                  <div>
                    <button onClick={this.onReset}>Usuń filtry</button>
                  </div>
                </div>
                <ReactTable
                  data={filteredData}
                  columns={getColumns(filteredData)}
                  minRows={0}
                  defaultPageSize={20}
                  pageSizeOptions={[10, 20]}
                  pageJumpText={"następna strona"}
                  rowsSelectorText={"ilość transakcji na stronie"}
                  previousText={"Poprzednia strona"}
                  nextText={"Następna strona"}
                  pageText={"Strona"}
                  ofText={"z"}
                  rowsText={"transakcji"}
                  getTrProps={(state, rowInfo, column) => {
                    if (!rowInfo) {
                      return {};
                    }
                    return {
                      style: {
                        background:
                          rowInfo.original.type == "wydatki"
                            ? "rgba(136, 132, 216, 0.5)"
                            : "rgba(130, 202, 157, 0.5)"
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
