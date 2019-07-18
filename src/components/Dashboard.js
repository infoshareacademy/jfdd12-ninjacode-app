import React, { useState } from "react";
import { PieChartBalance } from "./PieChartBalance";
import { Header } from "./Header";
import costs from "../icons/costs.svg";
import revenues from "../icons/revenues.svg";
import pig from "../icons/pig.svg";
import Container from '@material-ui/core/Container';

export function Dashboard(props) {
  const { balance } = props;

  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <Container maxWidth="sm" style={{ backgroundColor: 'white' }}>
        <Header />

        <div
          style={{
            padding: 15,
            display: "flex",
            flexDirection: "column",
            justifyConent: "center",
            textAlign: "center"
          }}
        >
          <h2>
            {" "}
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
        </div>

        <div style={{ marginTop: 30 }}>
          <PieChartBalance balance={balance} />
        </div>
      </Container>
    </div >
  );
}
