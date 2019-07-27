import React from "react";
import { BarChartBalance } from "./BarChartBalance";
import { PieChartIncomes } from "./PieChartIncomes";
import { PieChartExpenses } from "./PieChartExpenses";
import { BalanceConsumer } from "./../contexts/BalanceContext";
import { Layout } from "./Layout";

export function Charts() {

  return (
    <Layout title={"Wykresy"}>
      <BalanceConsumer>
        {({ data }) => <BarChartBalance data={data} />}
      </BalanceConsumer>  
      <BalanceConsumer>
        {({ balance, incomesCategories }) => {
          debugger
          return(<PieChartIncomes balance={balance} incomesCategories={incomesCategories} />
        )}}
      </BalanceConsumer>
      <BalanceConsumer>
        {({ balance, expensesCategories }) => {
          debugger
          return(<PieChartExpenses balance={balance} expensesCategories={expensesCategories} />
        )}}
      </BalanceConsumer>
    </Layout>
  );
}
