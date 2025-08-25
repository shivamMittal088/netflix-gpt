import { createSlice } from "@reduxjs/toolkit";

const MultiLanguageSlice = createSlice({
    name : "config" ,
    initialState : {
        language : "en",
    },
    reducers : {
        changeLanguage : (state,action) => {
            state.language = action.payload;
        }
    }
})

export const { changeLanguage } = MultiLanguageSlice.actions ;

export default MultiLanguageSlice.reducer ;