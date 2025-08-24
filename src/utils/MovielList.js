import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";
import { IMG_URL_PATH } from "./constants";
import ShimmerGrid from "./Shimmer/ShimmerGrid";

const MovielList = ( {title , movies} ) => {
    // const movie = useSelector((store)=>{
    //     return store.movies?.nowPlayingMovies;
    // })

    if(!movies){
        return  <ShimmerGrid />
    }

    console.log("Hello");
    console.log(movies);

    // const { poster_path } = NowTrendingList[0];

  return (
    <div>
        <div>
            <h1 className="font-bold p-2 ml-2"> { title }</h1>
        </div>
        
        <div className="flex  overflow-x-scroll gap-4 p-2 scrollbar-hide" >
            { movies.map( (card) => {
                return <div key = {card.id} className="flex-shrink-0">
                    <MovieCard path = {IMG_URL_PATH} poster = {card.poster_path} />
                </div>
            })
            }
        </div>
    </div>
  )
}

export default MovielList


// Why it happens

// When React first renders your component:

// Your Redux store may not yet have the movie data (because it's fetched asynchronously).

// So store.movies?.nowPlayingMovies could be null or undefined initially.

// Then if you try to do something like nowPlayingMovies[0] → 💥 crash.



// 2. What happens on the first render

// Redux state = empty (no movies yet).

// nowPlayingMovies = undefined.

// if (!nowPlayingMovies) is true, so React returns <p>Loading...</p>.

// ✅ That’s the end of this render cycle.

// Anything after that return is not executed in this render.

// 3. Then Redux updates (API data arrives)

// Redux dispatches an action → state changes → React re-renders this component.

// Now nowPlayingMovies has an array of movies.

// if (!nowPlayingMovies) is false, so React skips the first return.

// It continues to the next return (...) that renders your movie list.

// ✅ This is a new render cycle, not a continuation of the old one.

// 4. Why code "after that" still runs

// Because React doesn’t call your function once.
// It calls it again and again whenever state/props/context change.