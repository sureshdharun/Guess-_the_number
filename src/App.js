import './App.css';
import { useState } from 'react';
import Result from './Result';

const computerGuess = Math.floor(Math.random()*10)+1;
function App() {
  const [input,setInput]=useState("");
  const handleChange =(e)=>{
    setInput(e.target.value)
  }
  return (
    <>
    <div className="container">
      <div className="head">
          <label htmlFor="term">Guess the number between 1 to 10 </label>
      </div>
      <input type="text" id="term" name="term" onChange={handleChange} />
      <Result computerGuess={computerGuess} input={input}/>

    </div>
    </>

  );
}

export default App;
