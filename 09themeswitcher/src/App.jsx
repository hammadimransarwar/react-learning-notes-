import { useState } from 'react'
import './App.css'
import { theme, ThemeContextProvider } from './Context/ThemeContext'
import { useEffect } from 'react';
import ThemeBtn from './components/themebutton';
import Card from './components/Card';
function App() {
  const [themeMode,setTheme]=useState('light');
  const lightTheme=()=>{
  setTheme('light');
}
const darkTheme=()=>{
  setTheme('dark');
}
  useEffect(()=>{
document.querySelector('html').classList. remove("light",
"dark")
document.querySelector('html').classList.add(themeMode)
},[themeMode])
  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>        
            </div>
            <div className="w-full max-w-sm mx-auto">  
              <Card/>      
            </div>
        </div>
    </div>
    </ThemeContextProvider>
  )
}

export default App
