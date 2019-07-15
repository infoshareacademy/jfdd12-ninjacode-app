import React, { useState } from "react";
import { PieChartBalance } from "./PieChartBalance";
import { BarChartBalance } from "./BarChartBalance";
import { Paper } from "@material-ui/core";

export function Wykresy() {
  const [balance, useBalance] = useState({
    saldo: 11000,
    incomes: 12000,
    expenses: 11000
  });
  return (
    <Paper>
      <PieChartBalance balance={balance} />
      <BarChartBalance />
    </Paper>
  );
}
