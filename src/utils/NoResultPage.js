import React from "react";
import { Search } from "lucide-react"; // using lucide-react icons
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "./ReduxStore/OpenAiSlice";

const NoResultPage = ({query}) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const s = useSelector((store)=>{
    return store.Ai;
  });

  const onBackHandler = ()=>{
    Navigate("/browse");  
  }

  const onClearHandler = ()=>{
    dispatch(updateQuery(""));
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="text-center p-6">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-700/30">
            <Search className="w-10 h-10 text-purple-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-purple-400 mb-2">
          No Results Found
        </h1>
        <p className="text-gray-400 mb-6">
          We couldn’t find any data matching your current search criteria. <br />
          Try adjusting your filters or search terms.
        </p>

        {/* Current search */}
        <div className="bg-gray-800 text-gray-300 rounded-lg py-2 px-4 mb-6 inline-block">
          Current search : {s.query}
        </div>

        {/* Clear Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClearHandler}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition"
          >
            ⟳ Clear Search
          </button>
          <button
            onClick={onBackHandler}
            className="px-5 py-2 rounded-lg bg-gray-700 text-gray-200 font-medium hover:bg-gray-600 transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoResultPage;
