import { useState } from 'react';
import './App.css'
import Card from './components/Card';



function App() {
  const [first,setFirst]=useState(0);
  const [second,setSecond]=useState(0);
  // const [cities,setCities]=useState(["istanbul","ankara"]);
  // const [firstName,setFirst] = useState("akın");
  // const [user,setUser] = useState({firstName : "akın",lastname:"cengiz"});
//    function firstIncrement(){
//   setFirst(first +1);
//   }
//  function secondIncrement(){
//    setFirst(second +1);
//  }
  return (
    <>
      <div id="first" className='container'>
        <h1>first: {first} </h1>
        <button onClick={()=> {setFirst(first+1)}}>first Increate</button>
      </div>
      <div id="second" className='container'>
        <h1>second: {second} </h1>
        <button onClick={()=> {setSecond(second+1)}}>second Increate</button>
      </div>
      <Card/>
    </>
  )
}

export default App
