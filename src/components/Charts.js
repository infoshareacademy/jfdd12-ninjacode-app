import React from "react";
import { BarChartBalance } from "./BarChartBalance";
import Container from "@material-ui/core/Container";
import { Header } from "./Header";
import styles from "./Charts.module.css";
import { BalanceConsumer } from "./../contexts/BalanceContext";

export function Charts() {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <BalanceConsumer>
        {({ data }) => (
          <Container
            className={styles.chartContainer}
            maxWidth="sm"
            style={{ backgroundColor: "white" }}
          >
            <Header title={"Wykresy"} />
            <BarChartBalance data={data} />
          </Container>
        )}
      </BalanceConsumer>
    </div>
  );
}
