import React, { useState } from "react";
import logo from '../icons/logo.svg'
 
 
 
 export function Header() {
    return (
    <div style={{padding: 20, display: "flex", flexDirection: "column",justifyConent: "center", textAlign: "center", borderBottom: "1px solid black"}}>
   
    <img style={{marginLeft: 20}} src={logo} alt="Logo" />
    
    <h2 style={{marginLeft: 30}}>  Planer finansowy</h2>
    
    </div>
    )
  }