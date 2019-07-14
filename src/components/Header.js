import React, { useState } from "react";
import logo from '../icons/logo.svg'
 
 
 
 export function Header() {
    return (
    <div style={{display: "flex", marginTop: 20}}>
   
    <img style={{marginLeft: 20}} src={logo} alt="Logo" /> 
    <h2 style={{margin: "0 auto", marginTop: 30}}> Planer finansowy</h2>
    </div>
    )
  }