import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import BottomAppBar from "./BottomAppBar";
import * as serviceWorker from "./serviceWorker";
import { HistoryTable } from "./components/HistoryTable/HistoryTable";
import { Dashboard } from "./components/Dashboard";
import { Charts } from "./components/Charts";
import { AuthProvider } from "./contexts/AuthContext";
import { BalanceProvider, BalanceConsumer } from "./contexts/BalanceContext";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import "./firebase";
import { signIn } from "./services/AuthService";

const NoMatch = () => <h1>404</h1>;

class Root extends React.Component {
  render() {
    return (
      <BalanceProvider>
        <BalanceConsumer>
          {value => (
            <BrowserRouter>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/History" component={HistoryTable} />
                <PrivateRoute path="/Charts" component={Charts} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
              <BottomAppBar onFormInput={value.onFormInput} />
            </BrowserRouter>
          )}
        </BalanceConsumer>
      </BalanceProvider>
    );
  }
}

ReactDOM.render(
  <AuthProvider>
    <Root />
  </AuthProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
