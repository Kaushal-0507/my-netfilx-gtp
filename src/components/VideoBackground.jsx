import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useTVTrailer from "../hooks/useTVTrailer";
import { TMDB_IMG_URL } from "../utils/constant";

const VideoBackground = ({ mediaId, image, mediaType = "movie" }) => {
  // Conditionally call hooks based on mediaType
  useMovieTrailer(mediaType === "movie" ? mediaId : null);
  useTVTrailer(mediaType === "tv" ? mediaId : null);

  const trailerVideo = useSelector((store) => store.movie?.trailerMovie);
  const tvTrailer = useSelector((store) => store.tv?.tvTrailer);
  const filter = useSelector((store) => store.filter);

  // Determine which trailer to use based on mediaType
  const trailer = mediaType === "movie" ? trailerVideo : tvTrailer;

  return (
    <div className="w-full h-full">
      {/* Gradient overlay */}
      <div className="absolute left-40 h-screen w-1/3 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

      {/* Video or image content */}
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playlist=${trailer?.key}&loop=1&disablekb=1&fs=0&iv_load_policy=3`}
          className="absolute top-0 left-40 w-10/12 h-screen pointer-events-none"
          allow="autoplay; encrypted-media"
          title="Video player"
        />
      ) : (
        <img
          src={TMDB_IMG_URL + image}
          alt="Media backdrop"
          className="absolute top-14 left-62 w-[78%] h-[480px] z-5 object-cover"
        />
      )}
    </div>
  );
};

export default VideoBackground;
