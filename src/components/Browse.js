import HeaderBrowse from "./HeaderBrowse"
import MainContainer from "../utils/MainContainer"
import SecondaryContainer from "../utils/SecondaryContainer"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import usePopularMovies from "../customHooks/usePopularMovies"
import useTopRatedMovies from "../customHooks/useTopRatedMovies"
import useUpcomingMovies from "../customHooks/useUpcomingMovies"

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  {/* we have created hook because code is looking with very lengthy , hence to simplify our browse page . */}

  return (
    <div>

      <div className="w-full flex justify-between">
        <HeaderBrowse/>
      </ div>


        <div>
          < MainContainer />
          < SecondaryContainer />
        </ div>

        { /*
     # Main Container 
     - video Title
     - video background .

   # Secondary Container 
    - list of movies * n .
      - cards * n  
    */ }  

    </div>
  )

}

export default Browse;