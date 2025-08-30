import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/ReduxStore/userSlice"
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
          if (location.pathname === "/") {
          navigate("/Browse");
          }
  
          } else {
              // User is signed out
              dispatch(removeUser()) ;
              if (location.pathname !== "/") {
              navigate("/");
              }
              
          }
          });
      },[])


  return (
    <div className = "absolute w-52 ml-16 p-4">
        <img 
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt = "Netflix-logo"
        // className="bg-gradient-to-b from-black"
        >
        </img>
    </div>
  )
}

export default Header