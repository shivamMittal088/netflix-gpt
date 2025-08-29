import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/ReduxStore/movieSlice";
import { useSelector } from "react-redux";


const usePopularMovies = () =>{
    const dispatch = useDispatch();

    const nowPopularMovies = useSelector((store)=>{
        return store.movies.nowPopularMovies;
    })

    const getPopularMovies = async ()=>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_options
        );
        const json = await data.json();
        console.log(json.results);

        dispatch(addPopularMovies(json.results));
    };

    useEffect(()=>{
        !nowPopularMovies && getPopularMovies();
    },[])

};

export default usePopularMovies ;