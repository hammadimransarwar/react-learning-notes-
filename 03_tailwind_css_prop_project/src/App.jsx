import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstComp from './component/first_comp'
function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Project with react
      </h1>
      <FirstComp Maintext="Modern Design Solutions" buttontext="Learn More"/>
      <FirstComp Maintext="Innovative UI Components" buttontext="Get Started"/>
    </>
  )
}

export default App
