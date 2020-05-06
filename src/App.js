import React from 'react';

import blank_image from './resources/blank_image.png';

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
  return "Put brief description of charity here"
}

function App() {
  let query = useQuery();
  return (
    <div className="App">
        <header className="App-header">
          <div className="Image-container">
            <img src={blank_image} className="Background-image" alt="bimg" />
          </div>
        </header>
      <DonateForm charityName={query.get("name")} charityDescription={getDescription()} charityAmount={query.get("amount")}/>
    </div>
  );
}

export default App;
