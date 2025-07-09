import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useTVTrailer from "../hooks/useTVTrailer";
import { TMDB_IMG_URL } from "../utils/constant";

const VideoBackground = ({ mediaId, poster, image, mediaType = "movie" }) => {
  useMovieTrailer(mediaType === "movie" ? mediaId : null);
  useTVTrailer(mediaType === "tv" ? mediaId : null);

  const trailerVideo = useSelector((store) => store.movie?.trailerMovie);
  const tvTrailer = useSelector((store) => store.tv?.tvTrailer);
  const filter = useSelector((store) => store.filter);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile View
  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-end w-full h-94 sm:h-80 md:h-96 relative bg-black">
        <img
          src={TMDB_IMG_URL + (poster || image)}
          alt="Media poster"
          className="w-64 h-82 sm:w-52 sm:h-80 object-cover rounded-lg shadow-lg mx-auto mt-8"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>
    );
  }

  // Desktop View with Filters
  return (
    <div className="w-full h-full">
      {(filter === "Home" || filter === "Movies") && (
        <>
          <div className="absolute left-40 top-8 bottom-18 w-1/3 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
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
              className="absolute top-14 left-62 w-[78%] h-[480px] z-5 object-cover"
              alt="Movie backdrop"
            />
          )}
        </>
      )}

      {filter === "TV Shows" && (
        <>
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
              className="absolute top-14 left-62 w-[78%] h-[480px] z-5 object-cover"
              alt="TV Show backdrop"
            />
          )}
        </>
      )}
    </div>
  );
};

export default VideoBackground;
