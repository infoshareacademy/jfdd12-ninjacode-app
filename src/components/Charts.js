import React from "react";
import { BarChartBalance } from "./BarChartBalance";
import { BalanceConsumer } from "./../contexts/BalanceContext";
import { Layout } from "./Layout";

export function Charts() {
  return (
    <Layout title={"Wykresy"}>
      <BalanceConsumer>
        {({ data }) => <BarChartBalance data={data} />}
      </BalanceConsumer>
    </Layout>
  );
}
