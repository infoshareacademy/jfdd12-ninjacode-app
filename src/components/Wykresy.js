import React, { useState } from "react";
import { PieChartBalance } from "./PieChartBalance";
import { BarChartBalance } from "./BarChartBalance";

import { Header}  from './Header'


export function Wykresy(props) {
    const { data } = props;

  return (
      <div>
      <Header/>
      <BarChartBalance data={data}/>
      </div>
  )
}
