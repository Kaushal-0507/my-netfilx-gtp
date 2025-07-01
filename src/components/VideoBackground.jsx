import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { TMDB_IMG_URL } from "../utils/constant";

const VideoBackground = ({ movieId, image }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerMovie);
  useMovieTrailer(movieId);

  return (
    <div className="w-full h-full">
      <div className="absolute left-44 top-8 h-full w-1/3 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      {/* <img
        src={TMDB_IMG_URL + image}
        className="absolute top-14 left-66 w-[78%] h-[480px]  z-5"
      /> */}
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playlist=${trailerVideo?.key}&disablekb=1&fs=0&iv_load_policy=3&end=140&version=3&enablejsapi=1`}
        className="absolute top-0 left-44 w-10/12 h-[700px] pointer-events-none"
        allow="autoplay"
        onLoad={() => {
          const iframe = document.querySelector("iframe");
          iframe?.contentWindow?.postMessage(
            '{"event":"command","func":"setLoop","args":[true]}',
            "*"
          );
        }}
      />
    </div>
  );
};

export default VideoBackground;
