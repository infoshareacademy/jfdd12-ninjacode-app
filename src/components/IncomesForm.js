import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { MaterialUIPickers } from "./DatePickerExpenses";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export function IncomesForm() {
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");

  function onIncomesAddItem() {
    const itemExpense = {
      name: "odseteeeki od lokaty",
      category: "inwestycje",
      transactionDate: "06-04-2019",
      type: "przychody",
      amount: 3304.57
    };
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        <h2 style={{marginLeft: 30}}>Przychody</h2>
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

          <MaterialUIPickers />
        </div>
        <Button
          style={{ fontSize: 15, marginLeft: 20, marginTop: 10 }}
          color="primary"
          variant="contained"
          onClick={onIncomesAddItem}
        >
          Dodaj przychody
        </Button>
      </ul>
    </div>
  );
}
