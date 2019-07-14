import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { MaterialUIPickers } from "./DatePickerExpenses";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export function IncomesForm() {
  const [income, setIncome] = useState("");
  
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
      <h2>Przychody</h2>
      <FormControl>
        <InputLabel htmlFor="income-native-simple">Kategoria</InputLabel>
        <Select
          native
          value={income}
          onChange={event => {
            setIncome(event.target.value);
          }}
          inputProps={{
            name: "income",
            id: "income-native-simple"
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
            defaultValue="Wpisz nazwę przychodu"
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
        <div>
        <MaterialUIPickers />
        </div>
      </div>
      <Button style={{fontSize:15, marginLeft:10}}color="primary" variant="contained" onClick={onIncomesAddItem}>
              Dodaj przychody
      </Button>
      </ul>
    </div>
  );
}
