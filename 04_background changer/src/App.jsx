import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")
  return (
    <>
    <div id="background" className={color}>
      <div id='buttonbox'>
        <button className="button" onClick={()=>setcolor("orange")}>Orange</button>
        <button className="button" onClick={()=>setcolor("purple")}>Purple</button>
        <button className="button" onClick={()=>setcolor("red")}>Red</button>
        <button classNamed="button" onClick={()=>setcolor("blue")}>Blue</button>
        <button className="button" onClick={()=>setcolor("green")}>Green</button>
        <button className="button" onClick={()=>setcolor("yellow")}>Yellow</button>
      </div>
    </div>
    </>
  )
}

export default App
