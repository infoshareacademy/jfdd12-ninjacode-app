import plLocale from "date-fns/locale/pl";
import "date-fns";

import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const localeMap = {
  pl: plLocale
};

const useStyles = makeStyles({
  grid: {
    width: "100%"
  }
});

export function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [locale, setLocale] = React.useState("pl");
  const [selectedDate, setSelectedDate] = React.useState(
    props.date
  );

  const classes = useStyles();

  function handleDateChange(date, onDateSelected) {
    console.log("handleDateChange " + date + " " + onDateSelected);
    setSelectedDate(date);
    onDateSelected(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          value={selectedDate}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          clearable
          onChange={date => handleDateChange(date, props.onDateSelected)}
          minDate={new Date()}
          format="dd/MM/yyyy"
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
