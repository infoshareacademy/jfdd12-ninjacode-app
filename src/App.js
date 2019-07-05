import React from "react";
import logo from "./logo.svg";
import InfiniteCalendar from "react-infinite-calendar";
//import { Button } from "semantic-ui-react";
import "react-infinite-calendar/styles.css";
import "./App.css";
import { Button, Card, Elevation } from "@blueprintjs/core";

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
const ButtonExampleButton = () => <Button>Click Here</Button>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <InfiniteCalendar
        width={400}
        height={600}
        selected={today}
        disabledDays={[0, 6]}
        minDate={lastWeek}
      /> */}
      <button class="ui button">Click Here</button>

      <Card interactive={true} elevation={Elevation.TWO}>
        <h5>
          <a href="#">Card heading</a>
        </h5>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
    </div>
  );
}

export default App;
