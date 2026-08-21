import {useState,useEffect} from 'react'
function useCurrencyInfo(currency) {
    const [Data,SetData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((data)=>SetData(data[currency]));
    },[currency])
    console.log(Data);
    return Data;
}
export default useCurrencyInfo;