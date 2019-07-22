import React, { useState } from "react";
import { BarChartBalance } from "./BarChartBalance";
import Container from '@material-ui/core/Container';
import { Header } from "./Header";
import styles from './Charts.module.css'

export function Charts(props) {
  const { data } = props;
  return (
    < div style={{ backgroundColor: 'lightgray' }}>
      <Container className={styles.chartContainer} maxWidth="sm" style={{ backgroundColor: 'white' }}>
        <Header />
        <BarChartBalance data={data} />
      </Container>
    </div>
  );
}
