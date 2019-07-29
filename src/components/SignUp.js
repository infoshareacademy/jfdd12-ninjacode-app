import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { signUp } from "../services/AuthService";
import { useAuth } from "../hooks/useAuth";
import { Redirect } from "react-router-dom";
import { Layout } from "./Layout";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export function SignUp(props) {
  const classes = useStyles();
  const isLoggedIn = useAuth();
  const initalState = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  const [state, setState] = useState(initalState);
  const handleChange = (event, props) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name || props.name]: value || props.value
    });
  };

  if (isLoggedIn) {
    const redirectUrl =
      props.location &&
      props.location.state &&
      props.location.state.from &&
      props.location.state.from.pathname;

    return <Redirect to={redirectUrl ? redirectUrl : "/"} />;
  }
  return (
    <Layout title={"Zapisz się do aplikacji"}>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Imię"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nazwisko"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adres email"
                name="email"
                autoComplete="email"
                value={state.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                value={state.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={event => {
              event.preventDefault();
              signUp(state);
            }}
          >
            Zarejestruj się
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Masz konto? Zaloguj się
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Layout>
  );
}
