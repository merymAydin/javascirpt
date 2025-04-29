import React from "react"
import Card from "./Components/Card";
import List from "./Components/List";
import Custom from "./Components/Custom";




function App() {
  const name = "akın cengiz";
  return (
    <>
    <Custom/>
    <br /><hr /><br />
       <h1 className="bg-dark" >Merhaba React</h1>
       <h2 className="bg-danger">{15*4}</h2>

       <input type="text" />
       <p style={{backgroundColor : "red",fontSize:"18px"}}> {name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laboriosam dicta voluptates, nemo modi repellat est magni debitis quidem corrupti.</p>
       <p>Son yazdığım Paragraf elementi</p>
       <Card/>
       <List/>
       { /* backgroundColor */}
    </>
  )
}

export default App