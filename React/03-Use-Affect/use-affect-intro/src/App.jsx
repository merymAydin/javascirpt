import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [first,setFirst] = useState(0);
  const [second,setSecond] = useState(0);

  //1.kullanım
  useEffect(() => {
    console.log("\n-1-component ilk yüklendiğinde ve componentte herhangi bir değişiklik olduğunda çalışır...");
  })
   //2.kullanım
  useEffect(()=> {
    console.log("\n-2-component ilk yüklendiğinde çalışır...");
  },[])
   //3.kullanım
  useEffect(()=>{
    console.log("\n-3-component ilk yüklendiğinde ve first state değeri her değiştiğinde çalışır...");
  },[first])

  //4.kullanım
  useEffect(()=>{
    console.log("\n-4.component ilk yüklendiğinde ve second state değeri her değiştiğinde çalışır...");
  },[second])
  //5.kullanım
  useEffect(() => {
    console.log("\n-5.component ilk yüklendiğinde ve first ve ya second state değeri her değiştiğinde çalışır...");
  })

  return (
    <>
      <h1>use effect</h1>
      <div id='first'>
        <h2>first:{first}</h2>
        <button onClick={ () => setFirst(first+1)}>first increment</button>
      </div>
      <div id='second'>
        <h2>second:{second}</h2>
        <button onClick={ () => setSecond(second+1)}>second increment</button>
      </div>
    </>
  )
}

export default App
