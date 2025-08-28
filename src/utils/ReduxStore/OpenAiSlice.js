import { createSlice } from "@reduxjs/toolkit";

const OpenAiSlice = createSlice({
    name : "Ai" ,
    initialState : {
        "query" : "",
    },
    reducers : {
        updateQuery : (state,action)=>{
            state.query = action.payload;
        },
    },
})

export const { updateQuery } = OpenAiSlice.actions;

export default OpenAiSlice.reducer;