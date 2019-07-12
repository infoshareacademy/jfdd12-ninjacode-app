import React, { useState } from "react";

import { PieChartBalance } from "./PieChartBalance";
import { Paper } from "@material-ui/core";

export function Dashboard(props) {
  const { balance } = props;
  console.log("Dashboard props: ");
  console.log(props);
  // debugger;
  return (
    <Paper style={{ height: "100vh" }}>
      <h1>cashBake - planer finansowy</h1>
      <h1>SALDO:{balance.saldo.toFixed(2)}</h1>
      <h2>Przychody:{balance.incomes.toFixed(2)}</h2>
      <h2>Wydatki:{balance.expenses.toFixed(2)}</h2>
      <PieChartBalance balance={balance} />
    </Paper>
  );
}
