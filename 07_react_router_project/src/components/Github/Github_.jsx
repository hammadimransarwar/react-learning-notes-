import React from 'react'
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData();
    /*const [data,Setdata]=useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/users/hammadimransarwar`).
        then(Notdata=>Notdata.json).
        then(data=>Setdata(data));
    },[])
    */
return(
    <>
    <h1 className='bg-gray-700 text-white text-3xl p-4 font-bold text-center' >Github Followers:Github Followers: {data?.followers ?? 0}</h1>
    </>
)
}
export default Github
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hammadimransarwar');
  return response.json();
}; 