import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name : 'user' ,
        initialState : null ,
        reducers : {
            addUser : (state,action)=>{     // for login .
                return action.payload;     
            } ,

            removerUser: (state,action)=>{   // for logout .
                return null;
            }
        }
    }
);


export const {addUser , removeUser } = userSlice.actions ;

export default userSlice.reducer ;