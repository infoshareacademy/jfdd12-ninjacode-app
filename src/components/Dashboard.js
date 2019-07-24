import React from "react";
import { PieChartBalance } from "./PieChartBalance";
import costs from "../icons/costs.svg";
import revenues from "../icons/revenues.svg";
import pig from "../icons/pig.svg";
import { BalanceConsumer } from "../contexts/BalanceContext";
import styles from "./Dashboard.module.css";
import { Layout } from "./Layout";

export function Dashboard() {
  return (
    <Layout title={"Podsumowanie"}>
      <BalanceConsumer>
        {({ balance }) => (
          <div className={styles.main}>
            <h2>
              <img src={pig} alt="pig" /> Saldo : {balance.saldo} zł{" "}
            </h2>
            <h2>
              {" "}
              <img src={revenues} alt="revenues" /> Przychody :{" "}
              {balance.incomes.toFixed(2)} zł{" "}
            </h2>

            <h2>
              {" "}
              <img src={costs} alt="costs" /> Wydatki :{" "}
              {balance.expenses.toFixed(2)} zł
            </h2>
            <div style={{ marginTop: 30 }} />
            <PieChartBalance balance={balance} />
          </div>
        )}
      </BalanceConsumer>
    </Layout>
  );
}
