import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
// import App from './App';
import BottomAppBar from "./BottomAppBar";
import * as serviceWorker from "./serviceWorker";

const Dashboard = () => <h1>Dashboard</h1>;
const History = () => <h1>Historia</h1>;
const Wykresy = () => <h1>Wykresy</h1>;
const NoMatch = () => <p>404</p>;

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/history" component={History} />
        <Route path="/wykresy" component={Wykresy} />
        <Route component={NoMatch} />
      </Switch>

      <BottomAppBar />
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
