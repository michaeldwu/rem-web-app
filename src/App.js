import React from 'react';
import rem_logo from './resources/remlogo_horizontal.png';
import DonateForm from './components/DonateForm.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rem_logo} className="App-logo" alt="logo" />
      </header>
      <DonateForm charityName="Name of Charity" charityDescription="Put brief description of charity here."/>
    </div>
  );
}

export default App;
