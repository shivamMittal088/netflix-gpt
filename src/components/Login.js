import React from 'react'
import bgImage from '../utils/images/bg-image.jpg'
import Header from "./Header"


const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img 
      src={bgImage} 
      alt="background-image"
      className="h-full w-full object-cover"
      >
      </img>

      <div className="absolute inset-0 flex items-center justify-center">
        <form className="border-2 border-black h-3/4 w-3/12 m-10 p-4 rounded-lg bg-black bg-opacity-80">
        <h1 className="text-white font-bold text-3xl m-2 p-2">Sign In</h1>
        <input placeholder='Enter mail-id' className="border-2 border-black m-4 ml-10 rounded-sm p-2"></input>
        <input placeholder='Enter password' className="border-2 border-black m-4 ml-10 rounded-sm p-2"></input>
        <button className="border-2 border-black m-4 rounded-md w-48 p-2 bg-red-600 ml-10">Sign In</button>
        </form>
      </div>
      
    </div>
  );
}

export default Login;
