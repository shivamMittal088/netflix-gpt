import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { LANG } from './LanguageConstants';
import client from './OpenAI';

const GptSearchBar = () => {
  const searchText = useRef(null);


  const l = useSelector((store)=>{
    return store.MultiLanguageSlice.language;
  })

  const theme = useSelector((store)=>{
    return store.theme.theme ;
  })


  const handleChatGptSearch = async(e)=>{
    console.log(searchText.current.value);
    
      const gptQuery = "Act as a movie recommendation system having movies of the type : " + searchText.current.value + "only provide name of the movies and provide name of 20 movies which are comma separated ";
    // Make an api call to get movie results .

    const results = await client.responses.create({
    model: 'gpt-4o-mini',
    input: gptQuery ,
  });

  console.log(results.output_text);
}


  return (
      <div className= { "relative h-screen " + 
        (theme === "dark" 
          ? "bg-gradient-to-b from-black via-gray-900 to-black" 
          : "bg-gradient-to-b from-white via-gray-200 to-white"
        )
      }>

      <div className="absolute flex top-[15%] w-screen justify-center">

      <form className = "flex w-[45%] bg-black p-3 gap-4"
      onSubmit={(e)=>{
        return e.preventDefault();
      }}>

      <input
      ref = {searchText}
      className="w-[80%] bg-red-700 p-2 rounded-md border border-white"
      placeholder = {LANG[l].placeholder} ></input>


      <button 
      className="w-[20%] bg-red-700 text-white font-medium rounded-lg p-2 border border-white"
      onClick = { handleChatGptSearch } > {LANG[l].submit} </button>
    </form>

    </div>
    </div>
  )
}

export default GptSearchBar ;


{
  /*
  In React, when you create a ref using useRef, like this:
const inputRef = useRef();
inputRef is an object that looks like this initially:
{ current: null }
  */
}