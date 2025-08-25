import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "GptSearch" ,
    initialState : {
        Gpt : false ,
    },
    reducers :{
        ToggleGpt : (state) => {
            state.Gpt = !state.Gpt;
        },
            
    }

})

export const { ToggleGpt } = GptSlice.actions ;
export default GptSlice.reducer ;