import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signIn } from "../services/AuthService";
import { useAuth } from "../hooks/useAuth";
import { Redirect } from "react-router-dom";

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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export function Login(props) {
  const classes = useStyles();
  const isLoggedIn = useAuth();
  const [email, setEmail] = useState("test@test.com");

  const [password, setPassword] = useState("test123");

  if (isLoggedIn) {
    const redirectUrl =
      props.location &&
      props.location.state &&
      props.location.state.from &&
      props.location.state.from.pathname;

    return <Redirect to={redirectUrl ? redirectUrl : "/"} />;
  }

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <Container
        component="main"
        maxWidth="sm"
        style={{ backgroundColor: "white" }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logowanie
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={event => {
                event.preventDefault();
                signIn(email, password);
              }}
            >
              Zaloguj
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Nie masz konta? Zarejestruj się."}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
