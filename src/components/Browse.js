import HeaderBrowse from "./HeaderBrowse"
import MainContainer from "../utils/MainContainer"
import SecondaryContainer from "../utils/SecondaryContainer"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"

const Browse = () => {
    useNowPlayingMovies();  
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