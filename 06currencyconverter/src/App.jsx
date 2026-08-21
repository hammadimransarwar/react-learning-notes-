import './App.css'
import InputDiv from '../componentss/InputDiv'
import { useState} from 'react'
import useCurrencyInfo from '../custom hooks/Currencyinfohook';
function App() {
  const[amount,setAmount]=useState("");
  const [to,setTo]=useState("pkr");
  const[from,setFrom]=useState("usd");
  const[result,setResult]=useState("");
  const options_obj=useCurrencyInfo(from);
  const options=Object.keys(options_obj)
  const converter=()=>setResult(amount*options_obj[to]);
  const swap=()=>{
    setAmount(result);
    setResult(amount);
    setFrom(to);
    setTo(from);
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4025825/pexels-photo-4025825.jpeg?_gl=1*edabxw*_ga*MTU5NjMzMTQ4OC4xNzg3MTgwMDMw*_ga_8JE65Q40S6*czE3ODczMTY1MTAkbzMkZzAkdDE3ODczMTY1MTEkajU5JGwwJGgw')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converter()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputDiv
                                label="From"
                                amount={amount}
                                CurrencyOptions={options}
                                onAmountChange={(Amount)=>setAmount(Amount)}
                                onCurrencyChange={(Currency)=>setFrom(Currency)}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputDiv
                                label="To"
                                amount={result}
                                CurrencyOptions={options}
                                onCurrencyChange={(Currency)=>setTo(Currency)}
                                selectedCurrency={to}
                                amountDisable={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
