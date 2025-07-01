import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <div className="flex-col">
        <p className="font-bold py-2 text-[22px]">{title}</p>
        <div className="flex gap-3.5">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
