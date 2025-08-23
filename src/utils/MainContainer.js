import { useSelector } from 'react-redux'
import VideoTitle from './videoTitle';
import VideoBackground from './videoBackground';

const MainContainer = () => {
  const movies = useSelector((store)=>{
    return store.movies?.nowPlayingMovies;
  });

  if(!movies) return ;
  const mainMovie = movies[0];

  console.log("mainMovie");
  console.log(mainMovie);

  const { original_title , overview , id} = mainMovie;

  return (
    <div className="w-screen h-screen relative">
        <div>
          <VideoBackground videoid = {id} />
          <VideoTitle title={original_title} overview={overview} />
          
          
        </div>
    </div>
  )
}

export default MainContainer


{ /*  useSelector subscribes this component to the Redux store.

The selector receives the entire store and returns store.movies?.nowPlayingMovies.

The ?. (optional chaining) prevents a crash if store.movies isn’t there yet; you’ll get undefined instead of an error.

useSelector re-renders the component whenever the returned value changes by strict ===.
On first render it might be null/undefined.
After your fetch dispatches addNowPlayingMovies, it becomes an array → component re-renders.
  */
}