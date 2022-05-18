import { useState } from 'react';
import {Appi} from "./Component/Appi"
import {Timer} from "./Component/Timer"
import './App.css';

function App() {

  const [show , setShow] = useState(true);

  return (
    <div className="App">
       <button onClick={()=> {
       setShow(!show)
      }} className="sub-main">
        {show ? "Timer" : "Stopwatch"}
      </button>
      {show ? <div className='stopwatch'><Appi/></div> : <div className='timer'><Timer /></div>}
     

      
      
    </div>
  );
}

export default App;