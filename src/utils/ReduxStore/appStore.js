import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import GptSliceReducer from "./GptSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        movies : movieReducer ,
        GptSearch : GptSliceReducer ,
    }
});

export default appStore ;