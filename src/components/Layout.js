import React from "react";
import Container from "@material-ui/core/Container";
import { Header } from "./Header";
import styles from "./Layout.module.css";

export function Layout(props) {
  return (
    <div className={styles.background}>
      <Header title={props.title} />
      <Container className={styles.chartContainer} maxWidth="sm">
        {props.children}
      </Container>
    </div>
  );
}
