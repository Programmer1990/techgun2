import React,{useState} from 'react';              // input box values changes code in all lines
import './index.css';
import Student from './Student';

function App(){
  const [data,setData]=useState(null)
  const [Print,setPrint]=useState(false)
  function getData(val)  
    {
      console.warn(val.target.value)
      setData(val.target.value)// Val property contains the same value as the baseVal property.If the given attribute or property. target use for button(MDN)
      setPrint(false) //with this line text will erase from screen when we will clear text box.
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
