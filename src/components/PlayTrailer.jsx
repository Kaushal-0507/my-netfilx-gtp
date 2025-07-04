import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { hidePlayTrailer } from "../utils/movieSlice";

const PlayTrailer = (movieId) => {
  const playTrailer = useSelector((store) => store.movie?.playTrailer);
  const trailerVideo = useSelector((store) => store.movie?.trailerMovie);
  const tvTrailer = useSelector((store) => store.tv?.tvTrailer);
  const filter = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  return (
    <>
      {playTrailer && (
        <div className="absolute top-2 left-10 w-[94%] bottom-2 bg-black border-2 border-gray-200 rounded-lg text-white z-60">
          <div className="flex justify-between mx-10 items-center">
            <p className="text-3xl font-bold py-2.5">Trailer</p>
            <MdCancel
              size={30}
              onClick={() => {
                dispatch(hidePlayTrailer());
              }}
            />
          </div>
          {(filter === "Home" || filter === "Movies") && (
            <iframe
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&modestbranding=1&rel=0&playlist=${trailerVideo?.key}&disablekb=1&fs=0&iv_load_policy=3&version=3&enablejsapi=1`}
              className="w-full h-[90%] mx-auto"
              allow="autoplay"
              onLoad={() => {
                const iframe = document.querySelector("iframe");
                iframe?.contentWindow?.postMessage(
                  '{"event":"command","func":"setLoop","args":[true]}',
                  "*"
                );
              }}
            />
          )}
          {filter === "TV Shows" && (
            <iframe
              src={`https://www.youtube.com/embed/${tvTrailer?.key}?autoplay=1&modestbranding=1&rel=0&playlist=${tvTrailer?.key}&disablekb=1&fs=0&iv_load_policy=3&version=3&enablejsapi=1`}
              className="w-full h-[90%] mx-auto"
              allow="autoplay"
              onLoad={() => {
                const iframe = document.querySelector("iframe");
                iframe?.contentWindow?.postMessage(
                  '{"event":"command","func":"setLoop","args":[true]}',
                  "*"
                );
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PlayTrailer;
