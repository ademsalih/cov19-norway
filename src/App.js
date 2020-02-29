import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2'
import {ScatterGraph} from './ScatterGraph'
import {LineGraph} from './LineGraph'


function App() {
  return (
    <div className="App">
      <LineGraph/>
    </div>
  );
}

export default App;
