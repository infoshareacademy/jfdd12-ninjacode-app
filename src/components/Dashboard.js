import React, { useState } from "react";

import { PieChartBalance } from "./PieChartBalance";
import { Paper } from "@material-ui/core";
import { ExpensesForm, Inputs } from "./ExpensesForm";
import mockData from "../mockData.json";
import useData from "../hooks/useData";

export function Dashboard() {
  const balance = useData();

  console.log(mockData);
  return (
    <Paper style={{ height: "100vh" }}>
      <h1>cashBake - planer finansowy</h1>
      <h1>SALDO:{balance.saldo}</h1>
      <h2>Przychody:{balance.incomes.toFixed(2)}</h2>
      <h2>Wydatki:{balance.expenses.toFixed(2)}</h2>
      <PieChartBalance balance={balance} />
    </Paper>
  );
}
