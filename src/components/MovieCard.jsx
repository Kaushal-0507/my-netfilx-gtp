import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster, id }) => {
  const filter = useSelector((store) => store.filter);
  const navigate = useNavigate();
  return (
    <div>
      {poster && (
        <div
          className="relative transition-all duration-300  ease-in-out hover:scale-110 cursor-pointer"
          onClick={() => {
            navigate(`/watch?v=${id}&type=movie`);
          }}
        >
          <img
            src={TMDB_IMG_URL + poster}
            alt="poster"
            className={`  shadow-lg hover:shadow-xl transition-all duration-300 ${
              filter === "Actors" ? "max-w-44" : "min-w-46 max-w-46"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
