import { useDispatch } from "react-redux";
import { API_options} from "../utils/constants"
import { addNowPlayingMovies } from "../utils/ReduxStore/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    // Fetch data from TMDB API and update the store .
  const dispatch = useDispatch();

  const getNowPlayingMovies = async()=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_options
    );

    const json = await data.json();
    console.log(json.results) ;
    dispatch(addNowPlayingMovies(json.results));
  };


  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;


{
    // Custom hooks must always start with use + Capital letter when defined.
   // When calling them, make sure the spelling & case match exactly (useNowPlayingMovies() not usenowPlayingMovies()).
}