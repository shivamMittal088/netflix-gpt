import React from 'react'
import bgImage from '../utils/images/bg-image.jpg'
import Header from "./Header"
import {useState ,useRef} from 'react'
import { validate } from "../utils/validate.js"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { Eye ,EyeOff } from "lucide-react" ;

const Login = () => {
  const [isSignInForm ,setSignInForm] = useState(true);
  const [isLearnMore , setIsLearnMore] = useState(false);
  const [errorMessage , setErrorMessage] = useState(null);
  const [showPassword ,setShowPassword ] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = ()=>{
    setSignInForm(!isSignInForm);
  }

  const addLearn = ()=>{
    setIsLearnMore(!isLearnMore);
  }

  const handleButtonClick = ()=>{
    console.log(email.current.value);
    console.log(password.current.value);

    const message = validate(email.current.value , password.current.value);
    console.log(message);

    setErrorMessage(message);
    if(message) return;



    if(isSignInForm){
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
        displayName: user.current.value,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        }).catch((error) => {
          // An error occurred
          // ...
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });

    }
    else{
     createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }

  }



  return (
    <div className="relative min-h-screen w-full">
      <Header />

      <img 
      src={bgImage} 
      alt="background-image"
      className="h-screen w-full object-cover">
      </img>

      { 
      /* inset-0 means
      top-0 , left-0 , right-0 ,bottom-0
      this means that it will stretch the div to the full height of the positioned ancestor . 
      inset-1 = inset 4px from every edge.
      */
      }

      <div className="absolute inset-0 flex justify-center items-center ">
        <form 
        onSubmit = {(e)=>{
          e.preventDefault();
        }}
        className="border-2 border-white w-[85%] p-2 rounded-lg bg-black bg-opacity-80 h-[60%] -mt-20 md:w-1/4 md:h-[70%] md:-mt-0">


        <h2 
        className="text-white font-bold text-xl ml-1 pl-1 mt-0">{isSignInForm ? "SignIn" : "SignUp"}
        </h2>


        <input 
        ref = {email}
        placeholder='E-mail' 
        className="border-2 border-black ml-4 mt-2 rounded-sm p-1.5 bg-gray-600 w-9/12 cursor-text">
        </input>


        { !isSignInForm && (
        <input 
        placeholder='Full Name' 
        type="text" 
        className="border-2 border-black m-3 rounded-md p-1.5 bg-gray-600 w-9/12 curosr-text">
        </input> )} 


        {/* Password with Eye toggle */}
      <div className="relative w-9/12 m-4">  { /*make it parent so that it can become relative of eye button .*/ }
        <input
          ref={password}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="w-full border-2 border-black rounded-md p-1.5 bg-gray-600 cursor-text"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

        <button 
        onClick={handleButtonClick}
        className="border-2 border-black ml-4 mt-0.5 rounded-md p-1.5 bg-red-500 cursor-pointer w-9/12 
      hover:bg-red-600 active:bg-red-700 active:scale-95 active:shadow-inner">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>


        <p className="text-red-600  ml-8 text-lg font-bold" >
          {errorMessage}
        </p>



        <div className="m-2 p-2 mt-0">
          <p className="text-white m-2 p-2 text-sm inline">New to Netflix ?</p>

          <p  className="text-gray-500 text-md p-1 m-1 mt-0 font-bold inline underline cursor-pointer" onClick={toggleForm} >{!isSignInForm ? "SignIn" : "SignUp"}</p>
        </div>



        <div>
          <p className="underline cursor-pointer text-sm mx-2 px-2 text-white" onClick={addLearn} >{!isLearnMore ? "LearnMore":"" }</p>
        </div>



        <div className="mt-0">
          {isLearnMore && (
          <p className="text-white text-xs ml-1 px-1 mt-0">
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
