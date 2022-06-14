import { useState } from "react";
import "./App.css";

function App() {

  const[counter,seTcounter]=useState(0)
 
  function increment(){
    seTcounter(()=>counter+1)
      
    }
  
  function decrement(){
    if(counter<=0){
     
      return
    }
    seTcounter(()=>counter-1)
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">X={counter}</h2>
      <button data-testid="counter-decrement-button" disabled={counter===0} onClick={decrement}>-1</button>
      <button data-testid="counter-increment-button"   onClick={increment}>+1</button>
    </div>
  ); 
}

export default App;
