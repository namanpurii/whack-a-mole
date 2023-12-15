import React from "react";
import { Link } from "react-router-dom";
import moleMascot from "/mole-mascot.png";
const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-blue-100 font-bold">
      <span class="sm:flex items-center xs:text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
        <span className='font-["Poppins"]'>WHACK-a-</span>
        <div className="flex items-center justify-center">
          <span className='font-["Poppins"]'>M</span>
          <div className="w-32 h-32 rounded-full border-4 relative bg-violet-600">
            <img
              src={moleMascot}
              alt=""
              className="w-48 absolute top-9 left-0"
            />
          </div>
          <span>LE</span>
        </div>
      </span>
      <Link
        to="/play"
        className='font-["Poppins"] text-3xl mt-32 bg-violet-800 p-4 border-2 rounded-lg animate-bounce'
      >
        Click to start
      </Link>
    </div>
  );
};

export default Home;
