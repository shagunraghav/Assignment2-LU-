import React,{useState} from 'react'
import  './App.css';


const App=() =>{
  let [score, setScore]= useState(0)
  return(
    <div>
      <center>
      <h1> Counter Applicaltion </h1>
      <h1>{score}</h1>
      <button onClick={() => (score < 25) ? setScore(score + 1 ) : '' } > +1 </button>
      <button onClick={() => (score > 0) ? setScore(score - 1 ) : '' }> -1 </button>
      <button onClick={() => {setScore(0)}}m> Reset </button>
      </center>
    </div>
  )
}

export default App;
