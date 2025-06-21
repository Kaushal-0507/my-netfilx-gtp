import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="absolute z-30 top-46 w-full text-center">
        <p className="text-white font-extrabold max-w-[750px] mx-auto text-6xl leading-18 ">
          Unlimited movies, TV shows and more
        </p>
        <p className="text-[18px] font-semibold text-white py-3 ">
          Ready To Watch?
        </p>

        <button className="text-[18px] font-bold cursor-pointer text-white bg-red-600 rounded-[5px] py-5 px-10">
          <Link to="login">GET STARTED</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
