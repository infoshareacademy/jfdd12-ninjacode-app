import React from "react";
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
    <div className='App'>
      <h1>cashBake - planer finansowy</h1>
      {/* <InfiniteCalendar
        width={400}
        height={600}
        selected={today}
        disabledDays={[0, 6]}
        minDate={lastWeek}
      /> */}
      <button class='ui button'>Click Here</button>
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic pointing='left'>
          2,048
        </Label>
      </Button>
    </div>
  );
}

export default App;
