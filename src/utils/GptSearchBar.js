import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LANG } from './LanguageConstants';
import client from './OpenAI';
import NoResultsPage from './NoResultPage';
import { useNavigate } from 'react-router-dom';
import GptCard from './GptCard';
import { useState } from 'react';
import { updateQuery } from './ReduxStore/OpenAiSlice';
import { API_options }  from "./constants"

const GptSearchBar = () => {
  const Navigate = useNavigate();
  const searchText = useRef(null);
  const dispatch = useDispatch();


  const l = useSelector((store)=>{
    return store.MultiLanguageSlice.language;
  })

  const theme = useSelector((store)=>{
    return store.theme.theme ;
  })

    // store GPT results in state
  const [movies, setMovies] = useState([]);

  const gptMovies = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&page=1", API_options);
    const json = await data.json();
    return (json?.results) || [] ;
  }


  const handleChatGptSearch = async(e)=>{
    console.log(searchText.current.value);
    
      const gptQuery = `You are a movie recommendation API.
      The user will give you a genre or movie type.
      Your job:
      - If the query clearly matches a valid movie genre  return ONLY the names of the movies in a string separated by commas.
      - If the query is random, nonsense, or not a valid movie genre/type, return an empty string.
      Do not explain, do not add extra text.
      - give 10 movie in case if found valid .
      Query: ${searchText.current.value}`;





    // Make an api call to get movie results .

    const results = await client.responses.create({
    model: 'gpt-4o-mini',
    input: gptQuery ,
  });

  // results is  promise .
  console.log(results?.output_text);
  console.log(typeof(results?.output_text));   // string .

  const output = results?.output_text ;

  const outputTrim = output.trim();


   if(outputTrim.length === 0){
     Navigate("/NoResultPage");
   }

   dispatch(updateQuery(searchText.current.value)); // updating redux store .

    const arr = outputTrim.split(",");
    console.log(arr);

    const PromiseArray = arr.map((movie)=>{
      return gptMovies(movie);
    });

    // each gptMovies returning a promise .
    // hence it is a array of promises .

    // to resolve promise of arrays with Promise.all which take promise array as input .
    // it is async function which returns answer on resolving each elemeent array .

    const MovieArray = await Promise.all(PromiseArray);
    console.log(MovieArray);
    // array of resolve promises .

    // if in case for a movie there are more than one movie then it is a array of arrays .



    const allMovies = MovieArray.flat();
    setMovies(allMovies);
    console.log(allMovies);

    
}


  return (
      <div className= { "min-h-screen " + 
        (theme === "dark" 
          ? "bg-gradient-to-b from-black via-gray-900 to-black" 
          : "bg-gradient-to-b from-white via-gray-200 to-white"
        )
      }>

      <div className=" flex pt-[15vh] w-screen justify-center">

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


    {/* GPT Results Section */}
      {movies.length > 0 && (
        <div className="mt-0 px-6">
          <h2 className="text-xl font-bold mb-4 text-white">GPT Recommendations</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {movies.map((movie)=> (
              <GptCard key = {movie.id} m={movie} />
            ))}
          </div>
        </div>
      )}



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