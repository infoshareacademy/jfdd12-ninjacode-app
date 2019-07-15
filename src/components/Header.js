import React, { useState } from "react";
import logo from "../icons/logo.svg";

export function Header() {
  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyConent: "center",
        textAlign: "center",
        borderBottom: "1px solid black"
      }}
    >
      <img src={logo} alt="Logo" />

      <h2> Planer finansowy</h2>
    </div>
  );
}
