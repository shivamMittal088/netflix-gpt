import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name : "movies" ,

    initialState : {
        nowPlayingMovies : null ,
    },

    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = (action.payload);
        },
    },
});

export const { addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;

// reducers are basically functions .
// slice is basically containing objects in key value pair .