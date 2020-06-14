import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

     <Message counter={count}/>
     <br />
     <button onClick={
       ()=> setCount(++count)
     }>
       Update counter
     </button>

     <button onClick={()=>setMorning(!isMorning)}>upDate Day</button>

    </div>
  );
}

export default App;
