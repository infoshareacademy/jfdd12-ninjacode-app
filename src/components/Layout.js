import React from "react";
import Container from "@material-ui/core/Container";
import { Header } from "./Header";
import styles from "./Layout.module.css";

export function Layout(props) {
  return (
    <div className={styles.background}>
      <Container className={styles.chartContainer} maxWidth="sm">
        <Header title={props.title} />
        {props.children}
      </Container>
    </div>
  );
}
