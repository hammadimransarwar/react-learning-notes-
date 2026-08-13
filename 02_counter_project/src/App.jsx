import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //let counter=1
  let [counter, setCounter] = useState(0);
  const addvalue = () => {
    if(counter<20)
      setCounter(counter+1);
  }
  return (
    <>  
    <h1>Chai aut react|Hammad Imran</h1>
    <h2>Counter-Project: {counter}</h2>
    <button onClick={addvalue}>Add one</button>
    <button onClick={()=>{
      if(counter>0)setCounter(counter-1);
    }}>Subtract One</button>
    </>
  )
}

export default App
