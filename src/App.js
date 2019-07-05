import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [balance, setBalance] = useState({
    saldo: 13000,
    income: 12000,
    expenses: 1000,
  })
  return (
    <div className="App">
    <h1>SALDO: {balance.saldo}</h1>
    <div> 
    <h2>Przychody: {balance.income}</h2>
    <h2>Wydatki: {balance.expenses}</h2>
    </div>
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
    </div>
  );
}

export default App;
