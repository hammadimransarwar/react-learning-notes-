import React, { useContext } from 'react';
import UserContext from '../Context/UserContext'
import { useState } from 'react';

function Login(){
    const [username,setUsername]=useState('');
    const [password,Setpassword]=useState('');
    const {Setuser}=useContext(UserContext);
    const handleSumbit=(e)=>{
        e.preventDefault();
        Setuser({username,password})
    }
    return(
        <>
        <h1>Login</h1>
        <input type='text' value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <input type='text' value={password} placeholder='Password' onChange={(e)=>Setpassword(e.target.value)} />
        <br/>
        <button onClick={handleSumbit}>Submit</button>
        </>
    )
}
export default Login