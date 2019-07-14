import React, { useState } from "react";
import { PieChartBalance } from "./PieChartBalance";
import { BarChartBalance } from "./BarChartBalance";

import { Header}  from './Header'


export function Wykresy() {
  const [balance, setBalance] = useState({
    saldo: 11000,
    income: 12000,
    expenses: 1000
  });
  return (
      <div>
      <Header/>
      <BarChartBalance />
      </div>
  )
}
