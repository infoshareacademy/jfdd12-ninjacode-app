import React from "react";
import { BarChartBalance } from "./BarChartBalance";
import { PieChartIncomes } from "./PieChartIncomes";
import { PieChartExpenses } from "./PieChartExpenses";
import { BalanceConsumer } from "./../contexts/BalanceContext";
import { Layout } from "./Layout";

export function Charts() {

  return (
    <Layout title={"Wykresy"}>
      <h2 style={{textAlign: "center", margin: 10}}> Ogólne zestawienie przychodów i wydatków</h2>
      <BalanceConsumer>

        {({ data }) => <BarChartBalance data={data} />}
      </BalanceConsumer>
      <h2 style={{textAlign: "center", margin: 50}}> Przychody</h2>  
      <BalanceConsumer>
        {({ balance, incomesCategories }) => {
          
          return(<PieChartIncomes balance={balance} incomesCategories={incomesCategories} />
        )}}
      </BalanceConsumer>
      <h2 style={{textAlign: "center", margin: 50}}> Wydatki</h2>
      <BalanceConsumer>
        {({ balance, expensesCategories }) => {
          
          return(<PieChartExpenses balance={balance} expensesCategories={expensesCategories} />
        )}}
      </BalanceConsumer>
    </Layout>
  );
}
