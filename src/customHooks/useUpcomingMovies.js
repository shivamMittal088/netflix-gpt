import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/ReduxStore/movieSlice";


const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

    const nowUpcomingMovies = useSelector((store)=>{
        return store.movies.nowUpcomingMovies
    })

    const getUpcomingMovies = async ()=>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?page=1', API_options
        )
        const json = await data.json();
        console.log(json.results);

        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(()=>{
        !nowUpcomingMovies && getUpcomingMovies();
    },[])

};

export default useUpcomingMovies ;