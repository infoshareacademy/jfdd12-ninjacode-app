import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function NativeSelects() {

  const classes = useStyles();
  const [state, setState] = React.useState();

  const handleChange = transaction => event => {
    setState({
      ...state,
      [transaction]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <ul>
      <h1> Filtry </h1>
      <FormControl className={classes.formControl}  component="fieldset">
        <InputLabel htmlFor="transaction-native-simple">Rodzaj transakcji</InputLabel>
        <Select
          native
          value={state.transaction}
          onChange={() => {}}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value="Przychód">Przychód</option>
          <option value="Wydatej">Wydatek</option>
        </Select>
        
      </FormControl>

      </ul>
    </div>
  );
}