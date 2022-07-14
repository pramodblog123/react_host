// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  
  const[result, setResult]=useState("");
  
  function clickhandler(event){
    // console.warn()
    setResult(result+""+event.target.value)
  }

  function clear(){
    setResult("");
  }


  function calculate(){
    setResult(eval(result));
  }

  // funct
  
  return (
    <div className="App">
      <input type="text" readOnly placeholder='0' value={result} /><br/>
      <input type="button" className='button_val' value="9" onClick={clickhandler}/>
      <input type="button" className='button_val' value="8" onClick={clickhandler} />
      <input type="button" className='button_val' value="7" onClick={clickhandler} />
      <input type="button" className='button_val' value="/" onClick={clickhandler}/><br/>
      <input type="button" className='button_val' value="6" onClick={clickhandler} />
      <input type="button" className='button_val' value="4" onClick={clickhandler} />
      <input type="button" className='button_val' value="5" onClick={clickhandler} />
      <input type="button" className='button_val' value="*" onClick={clickhandler}/><br/>
      <input type="button" className='button_val' value="3" onClick={clickhandler} />
      <input type="button" className='button_val' value="2" onClick={clickhandler} />
      <input type="button" className='button_val' value="1" onClick={clickhandler} />
      <input type="button" className='button_val' value="-" onClick={clickhandler}/><br/>
      <input type="button" className='button_val' value="c" onClick={clear} />
      <input type="button" className='button_val' value="0" onClick={clickhandler} />
      <input type="button" className='button_val' value="+" onClick={clickhandler} />
      <input type="button" className='button_val' value="=" onClick={calculate} /><br/>
    </div>
  );
}

export default App;
