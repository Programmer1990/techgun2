import React,{useState} from 'react';
import './index.css';
import Student from './Student';

function App(){
  const [data,setData]=useState(null)
  const [Print,setPrint]=useState(false)
  function getData(val)  
    {
      console.warn(val.target.value)
      setData(val.target.value)
      setPrint(false)
    }
  
    return(
        <div className="App">
          {
            Print?
            <h1> {data}</h1>
            :null
          }
            
            <input type = "text" onChange={getData} />
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    );
   
}


    
     

export default App;
