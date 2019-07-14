import React, { useState } from "react";
import { PieChartBalance } from "./PieChartBalance";
import { Paper } from "@material-ui/core";
import logo from '../icons/logo.svg'


export function Dashboard(props) {
  const { balance } = props;

  console.log(props);
  
  function Header() {
    return (
    <div style={{display: "flex", marginTop: 20}}>
   
    <img style={{marginLeft: 20}} src={logo} alt="Logo" /> 
    <h2 style={{margin: "0 auto", marginTop: 30}}> Planer finansowy</h2>
    </div>
    )
  }

  return (
    <div>
      
      <Header/>

    <div style={{marginTop: 40,marginBottom: 40, display: "flex", flexDirection: "column", justifyConent: "center", textAlign: "center"}}>
      <h2>SALDO : {balance.saldo} zł </h2>
      <h3>Przychody : {balance.incomes.toFixed(2)} zł</h3>
      <h3>Wydatki : {balance.expenses.toFixed(2)} zł</h3>
    </div>
      
      <PieChartBalance balance={balance} />
      
   </div>
  );
}
