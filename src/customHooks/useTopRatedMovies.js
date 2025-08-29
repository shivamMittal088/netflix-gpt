import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/ReduxStore/movieSlice";


const useTopRatedMovies = () =>{
    const dispatch = useDispatch();

    const nowTopRatedMovies = useSelector((store)=>{
        return store.movies.nowTopRatedMovies;
    })

    const getTopRatedMovies = async ()=>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?page=1', API_options
        )
        const json = await data.json();
        console.log(json.results);

        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(()=>{
        !nowTopRatedMovies && getTopRatedMovies();
    },[])

};

export default useTopRatedMovies ;