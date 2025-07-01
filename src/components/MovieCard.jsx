import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <img
        src={TMDB_IMG_URL + poster}
        alt="poster"
        className="min-w-46  shadow-lg hover:shadow-xl transition-all duration-300"
      />
    </div>
  );
};

export default MovieCard;
