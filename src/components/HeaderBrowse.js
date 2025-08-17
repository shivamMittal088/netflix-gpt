import React from 'react'
import { auth }  from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const HeaderBrowse = () => {
    const navigate = useNavigate();


    const handleSignOut = ()=> {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
        }).catch((error) => {
        // An error happened.
        navigate("/error") ;
        });
    }


  return (
    <div className="w-full bg-gradient-to-b from-black/80 to-transparent top-0 z-20">
      <div className="flex justify-between items-center px-12 py-4">
        
        {/* Netflix Logo */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix-logo"
          className="w-40 cursor-pointer"
        />

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <img 
            src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeGp5GpS9YuLG46QJ6mDymuYqq2e96HmAK4d73YfnCA8KNyqbmALMIqBFrG4bovJBSEdGaDQtAM7EKheZVrsEBN6hi4WHZg.png?r=733" 
            alt="user-logo"
            className="w-10 h-10 rounded-md cursor-pointer"
          />
          <button 
          className="text-white font-semibold hover:underline cursor-pointer"
          onClick={handleSignOut}>Sign Out</button>
        </div>

      </div>
    </div>
  )
}

export default HeaderBrowse
