import { auth }  from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/ReduxStore/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { ToggleGpt } from "../utils/ReduxStore/GptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/LanguageConstants";
import { changeLanguage } from "../utils/ReduxStore/MultiLanguageSlice";
import { changeTheme } from "../utils/ReduxStore/ThemeSlice";
import { Sun, Moon } from "lucide-react";

const HeaderBrowse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = ()=> {
        signOut(auth).
        then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
        }).catch((error) => {
        // An error happened.
        navigate("/error") ;
        });
    }


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
        navigate("/Browse");

        } else {
            // User is signed out
            dispatch(removeUser()) ;
            navigate("/");
            
        }
        });
    },[])

    const handleToggle = ()=>{
      dispatch(ToggleGpt());
    }

    const check = useSelector((store)=>{
      return store.GptSearch;
    })

    const handleMultiLanguge = (e)=>{
      console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
    }

    const checkTheme = useSelector((store)=>{
        return store.theme.theme;
      })

      const c = checkTheme || "dark";

    const ToggleTheme = ()=>{
        if(c === "dark"){
          dispatch(changeTheme("light"));
        }else{
          dispatch(changeTheme("dark"));
        }  
    }


  return (
    <div className="absolute w-full bg-gradient-to-b from-black/100 to-transparent top-0 z-20">

      <div className="flex flex-col justify-between items-center px-8 py-4 md:flex-row ">
        
        {/* Netflix Logo */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix-logo"
          className="w-40 cursor-pointer -mx-5"
        />

        
        {/* Right Section */}
        
        <div className="flex mt-4 gap-4 md:items-center md:mt-0 flex-nowrap md:flex-wrap">

          {/* Theme */}
        {
          (!check.Gpt) && 
            <div>
            <button className="p-2 bg-black text-white border border-white rounded-lg px-2.5 -ml-2 cursor-pointer 
            font-semibold hover:px-5  hover:bg-white  hover:text-black  hover:font-medium  hover:text-lg md:px-4 md:-ml-0"
            onClick = { ToggleTheme }
            >{c === "light" ? (
            <Moon size={ 15 } className="text-gray-700" />
          ) : (
            
            <Sun size={ 15 } className="text-yellow-500" />
          )}
              </button>
          </div>
        }


          {/* Multi Language */}
{!check.Gpt && (
  <div>
    <select
      className="bg-black text-white font-semibold p-1.5 px-2 rounded-lg border border-gray-600 shadow-md hover:bg-gray-900 transition duration-200 ease-in-out cursor-pointer mr-4"
      defaultValue=""
      onChange={handleMultiLanguge}
    >
      {/* Placeholder for mobile
      <option value="" disabled hidden className="block md:hidden">
        lang
      </option> */}

      {/* Placeholder for laptop/desktop */}
      <option value="" disabled hidden>
        language
      </option>

      {SUPPORTED_LANGUAGE.map((lan) => (
        <option key={lan.identifier} value={lan.identifier}>
          {lan.value}
        </option>
      ))}
    </select>
  </div>
)}

          


          { /* Gpt search*/ }
          <button className="bg-red-700 p-2 rounded-lg font-semibold text-white cursor-pointer  hover:p-1 md:p-1.5  md:-ml-0 w-[14vw]  md:w-auto "
          onClick = {handleToggle}>
            <span className="md:hidden">Gpt</span>
            <p className="px-1 hidden md:block">GPT search</p>
        </button>


          <img 
            src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeGp5GpS9YuLG46QJ6mDymuYqq2e96HmAK4d73YfnCA8KNyqbmALMIqBFrG4bovJBSEdGaDQtAM7EKheZVrsEBN6hi4WHZg.png?r=733" 
            alt="user-logo"
            className="w-7 h-7 rounded-md cursor-pointer ml-[25%] mt-2 md:ml-0 md:mt-0 w-10 md:h-10 hidden md:block"
          />
          
          <button 
          className="text-white font-semibold hover:underline cursor-pointer mt-2 md:ml-0 border broder-white rounded-md bg-red-700 ml-3 hover:p-1 w-[21vw] md:w-auto md:px-2"
          onClick = {handleSignOut}> <p className="py-1">Sign Out</p> </button>
        </div>

      </div>
    </div>
  )
}

export default HeaderBrowse


{
  /*
    🔹 What defaultValue Does
In a <select> element in React, the defaultValue attribute sets the initial selected option when the component first renders.
It tells React: “When this dropdown loads, start with this value selected.”
After that, the dropdown works normally (user can change the selection).
  */
}


{
  /*
  <select defaultValue="banana">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="mango">Mango</option>
</select>

  */
}