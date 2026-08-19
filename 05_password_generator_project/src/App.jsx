import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const[numstate,set_numstate]=useState(false);
  const[charstate,set_charstate]=useState(false);
  const[password,set_password]=useState('');
  let password_ref=useRef(null);
  let password_changer=useCallback(()=>{
    let password_string='';
    let strings='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numstate){
      strings+='0123456789';
    }
    if(charstate){
      strings+='!@#$%^&*()_+';
    }
    for(let i=0;i<length;i++){
      let random_index=Math.floor(Math.random()*strings.length);
      password_string+=strings[random_index];
    }
    set_password(password_string);
  },[length,numstate,charstate])
  useEffect(()=>{
    password_changer();
  },[length,numstate,charstate])
  const copypassword=()=>{
    password_ref.current?.select();
    window.navigator.clipboard.writeText(password_ref.current?.value);
  }
  return (
    <div className='background'>
      <div className='Box_password_generator'>
         <h1 className='h1-heading'>Password Generator Project</h1>
         <div className='password-line-copy'>
          <input className='password-input' type="text" placeholder='Password' ref={password_ref}readOnly value={password}/>
          <button className='copy-button' onClick={copypassword}>Copy</button>
         </div>
         <div className='password-variables'>
          <div className="slider">
            <input type="range" min="6" max="20" htmlFor="length" value={length} onChange={(e)=>setlength(e.target.value)}/>
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="checkboxes">
            <input type="checkbox" checked={numstate} onChange={()=>set_numstate(prev=>!prev)}/>
            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" checked={charstate} onChange={()=>set_charstate(prev=>!prev)}/>
            <label htmlFor="characters">Include Characters</label>
          </div>
         </div>
      </div>
    </div>
  )
}

export default App
