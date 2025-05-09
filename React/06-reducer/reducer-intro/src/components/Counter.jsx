import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () =>{
    setCount(count - 1);
  }
  const incresement =()=>{
    setCount(count+1);
  }
  const reset =()=>{
    setCount(0);
  }
  
  return (
    <>
    <h2>Counter state</h2>
      <p>counter = {count}</p>
      <button onClick={incresement}> + </button>
      <button onClick={reset}> reset </button>
      <button onClick={decrement}> - </button>
      <br />
      <button onClick={()=> {setCount(count+1)}}> + </button>
      <button onClick={()=> {setCount(count-1)}}>  reset </button>
      <button onClick={()=> {setCount(0)}}>  - </button>
    </>
  )
}

export default Counter
