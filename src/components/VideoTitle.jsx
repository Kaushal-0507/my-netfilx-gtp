import React, { useState } from "react";
import PlayTrailer from "./PlayTrailer";
import { useDispatch, useSelector } from "react-redux";
import { showPlayTrailer } from "../utils/movieSlice";

const VideoTitle = ({ title, overview, movieId }) => {
  const playTrailer = useSelector((store) => store.movie?.playTrailer);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="absolute top-46 left-0 my-20 mx-10 z-10">
        <p className=" text-[32px] font-bold my-3 text-white">{title}</p>
        <p className="max-w-[350px] text-sm font-semibold mb-2 text-gray-400 line-clamp-4 overflow-hidden text-ellipsis">
          {overview}
        </p>
        <button
          type="button"
          className="py-2 cursor-pointer px-8 mr-2 bg-red-500/60 rounded-[3px] font-bold text-white "
          onClick={() => {
            dispatch(showPlayTrailer());
          }}
        >
          Play
        </button>

        <button
          type="button"
          className="py-2 cursor-pointer px-8 bg-white/10 rounded-[3px] font-bold text-white "
        >
          More Info
        </button>
      </div>
      <div>{playTrailer && <PlayTrailer movieId={movieId} />}</div>
    </div>
  );
};

export default VideoTitle;
