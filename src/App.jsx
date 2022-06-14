import { useState } from "react";
import "./App.css";

function App() {

  const[counter,seTcounter]=useState(0)
  const[disable,setDisable]=useState(false)
  function increment(){
    seTcounter(()=>counter+1)
      if(counter>0){
      setDisable(false)
      }
    }
  
  function decrement(){
    if(counter<=0){
      setDisable(true)
      return
    }
    seTcounter(()=>counter-1)
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">X={counter}</h2>
      <button data-testid="counter-decrement-button"  onClick={increment}>+1</button>
      <button data-testid="counter-increment-button" disabled={disable}  onClick={decrement}>-1</button>
    </div>
  ); 
}

export default App;
