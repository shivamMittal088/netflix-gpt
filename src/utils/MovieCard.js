const MovieCard = ({ path, poster }) => {
  return (
    <div>
        
      <div>
        <img
          alt="movieCard"
          src={path + poster}
          className="w-32 rounded-md "
        ></img>
      </div>

    </div>
  );
};

export default MovieCard;
