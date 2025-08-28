import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Login from './Login'
import Browse from './Browse'
import NoResultPage from "../utils/NoResultPage"
import { useSelector } from "react-redux"


const Body = () => {
    const result = useSelector((store)=>{
        return store.user;
    })

    const appRouter = createBrowserRouter([
        {
            path : "/" ,
            element : <Login/>
        } ,

        {
            path : "/Browse" ,
            element : <Browse />
        } ,

        {
            path : "/NoResultPage" ,
            element : !result ? <Login /> : <NoResultPage />,
        },

    ]);

  return (
    <div>
        <RouterProvider router ={appRouter} />
    </div>

  )
}

export default Body