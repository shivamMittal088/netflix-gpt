import { API_options } from "./constants"
import { useEffect, useState } from "react"

const VideoBackground = ({ videoid }) => {
  const [trailer, setTrailer] = useState(null);

  const videoDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoid}/videos?language=en-US`,
      API_options
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const pickedTrailer =
      filterTrailer.length > 0 ? filterTrailer[0] : json.results[0];

    setTrailer(pickedTrailer);
  };

  useEffect(() => {
    videoDetails();
  }, [videoid]); // ✅ refetch if movie changes

  return (
    <div className="w-screen h-screen ">
      {trailer ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; fullscreen"
        ></iframe>
      ) : (
        <p className="text-white">Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
