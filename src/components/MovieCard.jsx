import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const MovieCard = ({ poster, name }) => {
  const filter = useSelector((store) => store.filter);
  return (
    <div>
      {poster && (
        <div className="relative transition-all duration-300  ease-in-out hover:scale-110 cursor-pointer">
          <img
            src={TMDB_IMG_URL + poster}
            alt="poster"
            className={`  shadow-lg hover:shadow-xl transition-all duration-300 ${
              filter === "Actors" ? "w-44" : "min-w-46 max-w-46"
            }`}
          />
          {name && (
            <div className="absolute ml-2 p-2 bottom-2 font-bold text-white bg-black rounded-[3px] w-full">
              {name}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
