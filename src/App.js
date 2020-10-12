import React from 'react';
import { DatePicker } from 'antd';
import './App.scss';

function App() {
  const test = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className="App">
    <h1>Web personal de Joel</h1>
  
    <DatePicker onChange={test}/>
  
    </div>
  );
}

export default App;
