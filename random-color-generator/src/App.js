import React,{useState} from 'react';
import './App.css';

function App(){
  const[bgColor,setBgColor]= useState('#ffffff')
  const generateRandomColor=()=>{
    const randomColor= `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBgColor(randomColor);
  }
  return(
    <div className="App">
      <h1>Random Color Generator</h1>
      <p><emp>Created by Gaurav</emp></p>
      <div
        className="color-box"
        style={{backgroundColor:bgColor}}>

      </div>
      <button onClick= {generateRandomColor}>GENERATE</button>
      </div>
  )
}
export default App;
