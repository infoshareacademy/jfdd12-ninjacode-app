import React, { useState } from "react";

import { PieChartBalance } from "./PieChartBalance";
import { Paper } from "@material-ui/core";
import { ExpensesForm, Inputs } from "./ExpensesForm";

export function Dashboard() {
  const [balance, useBalance] = useState({
    saldo: 11000,
    income: 12000,
    expenses: 1000
  });
  return (
    <Paper style={{ height: "100vh" }}>
      <h1>cashBake - planer finansowy</h1>
      <h1>SALDO:{balance.saldo}</h1>
      <h2>Przychody:{balance.income}</h2>
      <h2>Wydatki:{balance.expenses}</h2>
      <PieChartBalance balance={balance} />
      <div>
        <ExpensesForm />
      </div>
    </Paper>
  );
}
