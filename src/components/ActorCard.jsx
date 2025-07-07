import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const ActorCard = ({ poster, name, id }) => {
  const navigate = useNavigate();
  return (
    <>
      {poster && (
        <div
          className="relative min-w-46 cursor-pointer"
          onClick={() => {
            navigate("/actor?a=" + id);
          }}
        >
          <img
            src={TMDB_IMG_URL + poster}
            alt="poster"
            className=" shadow-lg w-full min-46 max-w-46 "
          />

          {name && (
            <div className="absolute ml-2 p-2 bottom-2 font-bold text-white bg-black rounded-[3px] w-full">
              {name}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ActorCard;
