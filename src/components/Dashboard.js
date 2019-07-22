import React from "react";
import { PieChartBalance } from "./PieChartBalance";
import { Header } from "./Header";
import costs from "../icons/costs.svg";
import revenues from "../icons/revenues.svg";
import pig from "../icons/pig.svg";
import Container from '@material-ui/core/Container';
import { BalanceConsumer } from "../contexts/BalanceContext";
import styles from "./Dashboard.module.css";


export function Dashboard() {
  return (
    <BalanceConsumer>
      {({ balance }) => (
        < div style={{ backgroundColor: 'lightgray' }}>
          <Container maxWidth="sm" style={{ backgroundColor: 'white', paddingTop: '20px' }}>
            <Header />
            <div className={styles.main} >
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
              <div style={{ marginTop: 30 }}>
              </div>
                <PieChartBalance balance={balance} />
            </div>
          </Container>
        </div >)
      }
    </BalanceConsumer >
  );
}
