import React, { useState } from "react";
import PlayTrailer from "./PlayTrailer";
import { useDispatch, useSelector } from "react-redux";
import { showPlayTrailer } from "../utils/movieSlice";
import { formatRuntime, getYearFromDate } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({
  title,
  overview,
  movieId,
  flag,
  duration,
  release,
  lang,
  genres,
  mediaId,
}) => {
  const playTrailer = useSelector((store) => store.movie?.playTrailer);
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filter);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={`absolute left-0 my-20 mx-10 z-50 ${
          genres ? "top-24" : "top-46"
        }`}
      >
        {genres && (
          <div className="flex gap-4 mb-1.5">
            {genres.map((genre) => (
              <p key={genre.id} className="text-white font-semibold underline ">
                {genre?.name}
              </p>
            ))}
          </div>
        )}
        <p className=" text-[32px] font-bold mb-2 text-white">{title}</p>

        <p className="max-w-[350px] text-sm font-semibold mb-2 text-gray-400 line-clamp-4 overflow-hidden text-ellipsis">
          {overview}
        </p>
        {duration && (
          <div className="flex gap-2 items-center mb-3">
            {getYearFromDate(release) === "2025" && (
              <p className="bg-white/90 text-black py-1 px-2.5  text-[12px] font-semibold rounded-[3px]">
                New
              </p>
            )}
            <p className="py-1 px-2 rounded-[3px] bg-white/20 text-white text-[12px] font-semibold">
              {formatRuntime(duration)}
            </p>
            <p className="py-1 px-2 rounded-[3px] bg-white/20 text-white text-[12px] font-semibold">
              {getYearFromDate(release)}
            </p>
            <p className="py-1 px-2 rounded-[3px] bg-white/20 text-white text-[12px] font-semibold">
              {lang[0]?.english_name}
            </p>
            <p className="py-1 px-2 rounded-[3px] bg-white/20 text-white text-[12px] font-semibold">
              HDR
            </p>
            <p className="py-1 px-2 rounded-[3px] bg-white/20 text-white text-[12px] font-semibold">
              UHD
            </p>
          </div>
        )}

        <button
          type="button"
          className={`py-2 cursor-pointer px-8 mr-2 bg-red-500/60 rounded-[3px] font-bold text-white ${
            duration ? "w-40" : ""
          } `}
          onClick={() => {
            dispatch(showPlayTrailer());
          }}
        >
          {duration ? "Play Trailer" : "Play"}
        </button>

        {flag && (
          <button
            type="button"
            className="py-2 cursor-pointer px-8 bg-white/10 rounded-[3px] font-bold text-white "
            onClick={() => {
              filter === "Home" || filter === "Movies"
                ? navigate(`/watch?v=${mediaId}&type=movie`)
                : navigate(`/watch?v=${mediaId}&type=tv`);
            }}
          >
            More Info
          </button>
        )}
      </div>
      <div>{playTrailer && <PlayTrailer movieId={movieId} />}</div>
    </div>
  );
};

export default VideoTitle;
