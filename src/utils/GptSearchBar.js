import React from 'react'
import { useSelector } from 'react-redux';
import { LANG } from './LanguageConstants';

const GptSearchBar = () => {
  const l = useSelector((store)=>{
    return store.MultiLanguageSlice.language;
  })

  const theme = useSelector((store)=>{
    return store.theme.theme ;
  })

  return (
    <div className= { "relative h-screen " + 
  (theme === "dark" 
    ? "bg-gradient-to-b from-black via-gray-900 to-black" 
    : "bg-gradient-to-b from-white via-gray-200 to-white"
  )
}>



      <div className="absolute flex top-[15%] w-screen justify-center">

      <form className = "flex w-[45%] bg-black p-3 gap-4">

      <input className="w-[80%] bg-red-700 p-2 rounded-md border border-white"
      placeholder = {LANG[l].placeholder} ></input>


      <button className="w-[20%] bg-red-700 text-white font-medium rounded-lg p-2 border border-white"> {LANG[l].submit} </button>
    </form>

    </div>
    </div>
  )
}

export default GptSearchBar ;
