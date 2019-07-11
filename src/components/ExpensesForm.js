import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { MaterialUIPickers } from "./DatePickerExpenses";
import { Button } from "@material-ui/core";
import useData from "../hooks/useData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export function ExpensesForm() {
  const [expense, setExpense] = useState("");
  const classes = useStyles();
  const { addExpense } = useData();

  function onExpensesAddItem() {
    const itemExpense = {
      name: "odseteeeki od lokaty",
      category: "inwestycje",
      transactionDate: "06-04-2019",
      type: "wydatki",
      amount: 3304.57
    };
    addExpense(itemExpense);
  }
  return (
    <div className={classes.root}>
      <ul>
        <h2>Wydatki</h2>
        <FormControl>
          <InputLabel htmlFor="expense-native-simple">Kategoria</InputLabel>
          <Select
            native
            value={expense}
            onChange={event => {
              setExpense(event.target.value);
            }}
            inputProps={{
              name: "expense",
              id: "expense-native-simple"
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
              defaultValue="Wpisz nazwę"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
            />
          </div>
          <div className={classes.container}>
            <Input
              defaultValue="Wpisz kwotę"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
            />
          </div>
          <MaterialUIPickers />
        </div>
        <Button onClick={onExpensesAddItem}>dodaj</Button>
      </ul>
    </div>
  );
}
