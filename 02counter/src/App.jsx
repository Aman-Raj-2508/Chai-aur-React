import './App.css'
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    if (counter >= 20) {
      alert("Counter cannot be greater than 20");
      return;
    }
    setCounter(counter + 1);
  }

  function decrement() {

    if (counter == 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>

      <h1>Counter</h1>
      <h2> Counter value : {counter} </h2>
      <button onClick={increment}>Increment</button>
      <br></br>
      <br></br>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <br></br>
      <button onClick={reset}>Reset</button>

    </>
  )
}

export default App
