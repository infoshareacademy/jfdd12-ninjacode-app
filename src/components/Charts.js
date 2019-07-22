import React, { useState } from "react";
import { BarChartBalance } from "./BarChartBalance";
import Container from '@material-ui/core/Container';
import { Header } from "./Header";

export function Charts(props) {
  const { data } = props;
  return (
    < div style={{ backgroundColor: 'lightgray' }}>
      <Container maxWidth="sm" style={{ backgroundColor: 'white' }}>
        <Header />
        <BarChartBalance data={data} />
      </Container>
    </div>
  );
}
