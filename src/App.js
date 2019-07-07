import React from 'react';
import './App.css';
import { ChartDashboard } from './components/ChartDashboard'
import { NativeSelects } from './components/FilterViev'
import { CheckboxesGroup } from './components/FilterVievCheckbox'


function App() {
  
  return (
   <div>          
     <ChartDashboard/>
     <NativeSelects/>
     <CheckboxesGroup/>
     
   </div>
  );
}

export default App;
