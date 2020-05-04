import React from 'react';
import rem_logo from './resources/remlogo_horizontal.png';
import DonateForm from './components/DonateForm.js'
import './App.css';
import {
  useLocation
} from "react-router-dom";


// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getDescription(){
  return "Put breif description of charity here"
}

function App() {
  let query = useQuery();
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={rem_logo} className="App-logo" alt="logo" />
      </header>
      <DonateForm charityName={query.get("name")} charityDescription={getDescription()} charityAmount={query.get("amount")}/>
    </div>
  );
}

export default App;
