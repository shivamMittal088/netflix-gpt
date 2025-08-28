import React, { useState } from "react";
import { IMG_URL_PATH } from "./constants";
import { useSelector } from "react-redux";


const GptCard = ({m,onOpen}) => {

  // const onClickHandler = ()=>{
  //   console.log("Helllo");
  // }

  const s = useSelector((store)=>{
    return store.Ai;
  })

  const { original_title , backdrop_path , poster_path ,release_date , original_language } = m
  return (
    <div className="w-[18%] bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-xl shadow-md p-3 hover:scale-105 transition">


      {/* Poster */}
      <img 
      alt = { original_title }
      src = { IMG_URL_PATH  + (backdrop_path || poster_path)}
      className="w-full h-28 bg-gray-700 rounded-md flex items-center justify-center text-2xl"
      onClick = { onOpen }    // 👈 trigger modal open
      >
      </img>

      {/* Movie Info */}
      <h2 className="mt-2 text-sm font-bold truncate"> { original_title } </h2>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span> { release_date } </span>
        <span> { original_language } </span>
      </div>

      Tags
      <div className="flex flex-wrap gap-1 mt-2">
        <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-600"></span>
        <span className="px-2 py-0.5 text-[10px] rounded-full bg-green-600"></span>
      </div>

      {/* Match + Button */}
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs text-green-400"> {s.query} </span>
        <button className="text-xs bg-indigo-600 px-2 py-1 rounded-lg hover:bg-indigo-700">
          More
        </button>
      </div>


    </div>
  );
};

export default GptCard;
