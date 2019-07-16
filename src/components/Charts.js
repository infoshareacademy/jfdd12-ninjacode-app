import React from "react";
import { BarChartBalance } from "./BarChartBalance";

import { Header } from "./Header";

export function Charts(props) {
  const { data } = props;
  return (
    <div>
      <Header />
      <BarChartBalance data={data} />
    </div>
  );
}
