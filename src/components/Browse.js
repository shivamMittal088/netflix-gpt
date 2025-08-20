import HeaderBrowse from "./HeaderBrowse"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div className="w-full flex justify-between">
        <HeaderBrowse/>
        
      </div>
    </div>
  )
}

export default Browse;