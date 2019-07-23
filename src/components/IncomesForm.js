import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { MaterialUIPickers } from "./DatePickerExpenses";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

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

export function IncomesForm(props) {
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [incomeName, setIncomeName] = useState("");
  const [incomeDate, setIncomeDate] = useState(
    moment(new Date()).format("DD-MM-YYYY")
  );
  const classes = useStyles();

  const { onFormInput } = props;

  function onIncomesAddItem() {
    const itemExpense = {
      name: incomeName,
      category: category,
      transactionDate: moment(incomeDate ? new Date() : incomeDate).format(
        "DD-MM-YYYY"
      ),
      type: "wpływy",
      amount: parseFloat(income)
    };
    onFormInput(itemExpense);
  }

  return (
    <div className={classes.root}>
      <h2 style={{ textAlign: "center" }}>Przychody</h2>
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
          <option value={"Faktura"}>Faktura</option>
          <option value={"Przelew"}>Przelew</option>
          <option value={"Lokata"}>Lokata</option>
          <option value={"Inne"}>Inne</option>
        </Select>
      </FormControl>
      <div>
        <div className={classes.container}>
          <Input
            placeholder="Wpisz nazwę"
            className={classes.formControl}
            value={incomeName}
            onChange={event => {
              setIncomeName(event.target.value);
            }}
            inputProps={{
              "aria-label": "Description"
            }}
          />
        </div>
        <div className={classes.container}>
          <TextField
            id="standard-number"
            placeholder="Wpisz kwotę"
            value={income}
            onChange={event => {
              setIncome(event.target.value);
            }}
            type="number"
            className={classes.formControl}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </div>

        <MaterialUIPickers onDateSelected={setIncomeDate} />
      </div>
      <Button
        style={{
          fontSize: 20,
          marginTop: 10,
          padding: "15px 10px",
          backgroundColor: "rgba(68, 105, 132, 1)",
          color: "white"
        }}
        variant="contained"
        onClick={onIncomesAddItem}
      >
        Dodaj przychód
      </Button>
    </div>
  );
}
