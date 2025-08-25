import HeaderBrowse from "./HeaderBrowse"
import MainContainer from "../utils/MainContainer"
import SecondaryContainer from "../utils/SecondaryContainer"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import usePopularMovies from "../customHooks/usePopularMovies"
import useTopRatedMovies from "../customHooks/useTopRatedMovies"
import useUpcomingMovies from "../customHooks/useUpcomingMovies"
import { useSelector } from "react-redux"
import GptSearchBar  from "../utils/GptSearchBar"

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  {/* we have created hook because code is looking with very lengthy , hence to simplify our browse page . */}

  const GptSearch = useSelector((store)=>{
    return store.GptSearch;
  }) 

  return (
    <div>
      
      <div className="w-full flex justify-between">
        <HeaderBrowse/>
      </ div>

      {
        (!GptSearch.Gpt) ? <GptSearchBar /> :

           <div>
          < MainContainer />
          < SecondaryContainer />
          </ div>

      }

    </div>
  )

}

export default Browse;