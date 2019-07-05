import React from "react";
import logo from "./logo.svg";
import InfiniteCalendar from "react-infinite-calendar";
import { Button, Icon, Label } from "semantic-ui-react";
import "react-infinite-calendar/styles.css";
import "./App.css";

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

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
      <Button as="div" labelPosition="right">
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic pointing="left">
          2,048
        </Label>
      </Button>
    </div>
  );
}

export default App;
