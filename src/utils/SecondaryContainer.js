import MovielList from './MovielList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>{
    return store.movies;
  })


  return (
    <div>
        <MovielList title = { "Now Playing" } movies = {movies?.nowPlayingMovies  } />
        <MovielList title = { "Popular Movies" } movies = {movies?.nowPopularMovies  } />
        <MovielList title = { "Top Rated Movies" } movies = {movies?.nowTopRatedMovies } />
        <MovielList title = { "Upcoming Movies" } movies = {movies?.nowUpcomingMovies } />
    </div>
  )
}

export default SecondaryContainer