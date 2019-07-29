import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { MaterialUIPickers } from "./DatePickerExpenses";
import { Button } from "@material-ui/core";
import moment from "moment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export function ExpensesForm(props) {
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState(
    moment(new Date()).format("DD-MM-YYYY")
  );
  const classes = useStyles();

  // const { addExpense } = useData();
  const { onFormInput } = props;

  function onExpensesAddItem() {
    const itemExpense = {
      name: expenseName,
      category: category,
      transactionDate: moment(expenseDate ? new Date() : expenseDate).format(
        "DD-MM-YYYY"
      ),
      type: "wydatki",
      amount: parseFloat(expense)
    };

    if (expense !== "") {
      onFormInput(itemExpense);
    }
  }
  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: "center" }}>Wydatek</h2>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category-native-simple">Kategoria</InputLabel>
        <Select
          native
          value={category}
          onChange={event => {
            setCategory(event.target.value);
          }}
          inputProps={{
            name: "category",
            id: "category-native-simple"
          }}
        >
          <option value="" />
          <option value={"Koszty stałe"}>Koszty stałe</option>
          <option value={"Jedzenie"}>Jedzenie</option>
          <option value={"Rozrywka"}>Rozrywka</option>
          <option value={"Inne"}>Inne</option>
        </Select>
      </FormControl>
      <div>
        <div className={classes.container}>
          <Input
            placeholder="Wpisz nazwę"
            className={classes.formControl}
            inputProps={{
              "aria-label": "Description"
            }}
            value={expenseName}
            onChange={event => {
              setExpenseName(event.target.value);
            }}
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="standard-number"
            placeholder="Wpisz kwotę"
            value={expense}
            onChange={event => {
              setExpense(event.target.value);
            }}
            type="number"
            required
            className={classes.formControl}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </div>
        <MaterialUIPickers onDateSelected={setExpenseDate} />
      </div>
      <Button
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: "15px 10px",
          backgroundColor: "rgba(195, 50, 50, 1)",
          color: "white"
        }}
        variant="contained"
        onClick={onExpensesAddItem}
      >
        Dodaj wydatek
      </Button>
    </div>
  );
}
