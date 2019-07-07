import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    dom: true,
    samochód: false,
    dzieci: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { dom, samochód, dzieci } = state;
  const error = [dom, samochód, dzieci].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Wybierz kategorię</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={dom} onChange={handleChange('dom')} value="dom" />}
            label="Dom"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={samochód} onChange={handleChange('samochód')} value="samochód" />}
            label="Samochód"
          />
          <FormControlLabel
            control={
              <Checkbox color="primary" checked={dzieci} onChange={handleChange('dzieci')} value="dzieci" />
            }
            label="Dzieci"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}