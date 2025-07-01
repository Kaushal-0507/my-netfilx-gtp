import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="absolute top-[84%] z-30 left-14 w-[93%] text-white">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRated} />
      <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
