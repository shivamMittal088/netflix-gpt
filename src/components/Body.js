import { createBrowserRouter ,useNavigate} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/ReduxStore/userSlice"


const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path : "/" ,
            element : <Login/>
        } ,

        {
            path : "/Browse" ,
            element : <Browse />
        }

    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
    
        const { uid ,email ,displayName } = user;

        dispatch(addUser({
            id : uid ,
            name : displayName ,
            email : email ,
        })) ;


        } else {
            // User is signed out
            dispatch(removeUser()) ;
            
        }
        });
    },[])

  return (
    <div>
        <RouterProvider router ={appRouter} />
    </div>

  )
}

export default Body