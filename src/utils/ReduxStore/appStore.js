import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import GptSliceReducer from "./GptSlice"
import MultiLanguageSliceReducer from './MultiLanguageSlice';
import ThemeSliceReducer from './ThemeSlice';

const appStore = configureStore({
    reducer : {
        user : userReducer ,
        movies : movieReducer ,
        GptSearch : GptSliceReducer ,
        MultiLanguageSlice : MultiLanguageSliceReducer,
        theme : ThemeSliceReducer ,
    }
});

export default appStore ;