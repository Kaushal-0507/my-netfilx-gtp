import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { TMDB_IMG_URL } from "../utils/constant";
import useTVTrailer from "../hooks/useTVTrailer";

const VideoBackground = ({ movieId, image }) => {
  useMovieTrailer(movieId);
  useTVTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movie?.trailerMovie);
  const tvTrailer = useSelector((store) => store.tv?.tvTrailer);
  const filter = useSelector((store) => store.filter);

  return (
    <div>
      {(filter === "Home" || filter === "Movies") && (
        <div className="w-full h-full">
          <div className="absolute left-40 top-8 h-full w-1/3 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {trailerVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playlist=${trailerVideo?.key}&disablekb=1&fs=0&iv_load_policy=3&end=140&version=3&enablejsapi=1`}
              className="absolute top-0 left-40 w-10/12 h-screen pointer-events-none"
              allow="autoplay"
              onLoad={() => {
                const iframe = document.querySelector("iframe");
                iframe?.contentWindow?.postMessage(
                  '{"event":"command","func":"setLoop","args":[true]}',
                  "*"
                );
              }}
            />
          ) : (
            <img
              src={TMDB_IMG_URL + image}
              className="absolute top-14 left-62 w-[78%] h-[480px]  z-5"
            />
          )}
        </div>
      )}
      {filter === "TV Shows" && (
        <div className="w-full h-full">
          <div className="absolute left-40 top-8 h-full w-1/3 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {tvTrailer ? (
            <iframe
              src={`https://www.youtube.com/embed/${tvTrailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playlist=${tvTrailer?.key}&disablekb=1&fs=0&iv_load_policy=3&end=140&version=3&enablejsapi=1`}
              className="absolute top-0 left-40 w-10/12 h-screen pointer-events-none"
              allow="autoplay"
              onLoad={() => {
                const iframe = document.querySelector("iframe");
                iframe?.contentWindow?.postMessage(
                  '{"event":"command","func":"setLoop","args":[true]}',
                  "*"
                );
              }}
            />
          ) : (
            <img
              src={TMDB_IMG_URL + image}
              className="absolute top-14 left-62 w-[78%] h-[480px]  z-5"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
