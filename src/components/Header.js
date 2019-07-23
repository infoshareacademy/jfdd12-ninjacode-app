import React from "react";
import logo from "../icons/logo.svg";
import styles from "./Header.module.css";

export function Header({ title }) {
  return (
    <div className={styles.divA}>
      <div className={styles.classA}><img src={logo} alt="Logo" className={styles.icon} /></div>
      <div className={styles.classB}><h2 >{title}</h2></div>
      {/* <div className={styles.classC}><img src={logo} alt="Logo" className={styles.icon} /></div> */}
    </div>
  );
}
