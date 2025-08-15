import React from 'react'
import bgImage from '../utils/images/bg-image.jpg'
import Header from "./Header"
import {useState} from 'react'


const Login = () => {
  const [isSignInForm ,setSignInForm] = useState(true);
  const [isLearnMore , setIsLearnMore] = useState(false);

  const toggleForm = ()=>{
    setSignInForm(!isSignInForm);
  }

  const addLearn = ()=>{
    setIsLearnMore(!isLearnMore);
  }

  return (
    <div className="relative">
      <Header />

      <img 
      src={bgImage} 
      alt="background-image"
      className="h-full w-full object-cover"
      >
      </img>

      <div className="absolute inset-0 flex items-center justify-center">
        <form className="border-2 border-black h-3/4 w-4/12 m-10 p-4 rounded-lg bg-black bg-opacity-80">
        <h1 className="text-white font-bold text-3xl m-2 p-2 ">{isSignInForm ? "SignIn" : "SignUp"}</h1>
        <input placeholder='E-mail' className="border-2 border-black m-4  rounded-sm p-2 bg-gray-600 w-11/12 cursor-text"></input>

        { !isSignInForm && (
        <input 
        placeholder='Full Name' 
        type="text" 
        className="border-2 border-black m-4 rounded-sm p-2 bg-gray-600 w-11/12 curosr-text">
        </input> )} 

        <input placeholder='Password' type="password" className="border-2 border-black m-4 rounded-sm p-2 bg-gray-600 w-11/12 curosr-text"></input>
        <button className="border-2 border-black m-4 rounded-md p-2 bg-red-600 cursor-pointer w-11/12">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>

        <div className="m-2 p-2">
          <p className="text-white m-2 p-2 text-sm inline">New to Netflix ?</p>
          <p  className="text-gray-500 text-lg p-1 m-1 font-bold inline underline cursor-pointer" onClick={toggleForm} >{!isSignInForm ? "SignIn" : "SignUp"} Now</p>
        </div>

        <div>
          <p className="underline cursor-pointer text-sm m-2 p-2 text-white " onClick={addLearn} >{!isLearnMore ? "LearnMore" : "" }</p>
        </div>

        <div>
          {isLearnMore && (
          <p className="text-white text-sm m-2 p-2">
            The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google)
          </p>
          )}
        </div>


        

        </form>
      </div>
      
    </div>
  );
}

export default Login;
