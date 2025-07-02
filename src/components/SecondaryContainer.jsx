import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import TVList from "./tvList";
import ActorLists from "./ActorLists";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  const tvShows = useSelector((store) => store.tv);
  const filter = useSelector((store) => store.filter);
  // console.log(filter);
  // console.log(tvShows?.popularActor);

  return (
    <div>
      {filter === "Home" && (
        <div className="absolute top-[84%] z-30 left-14 w-[93%] text-white">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <TVList title={"Airing Today"} tvShows={tvShows?.tvShows} />
          <ActorLists
            title={"Popular Actors"}
            tvShows={tvShows?.popularActor}
          />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <TVList title={"Popular TV Shows"} tvShows={tvShows?.popularTV} />
          <MovieList title={"Top Rated Movies"} movies={movies?.topRated} />
          <TVList title={"On The Air"} tvShows={tvShows?.onTheAirTV} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upComingMovies}
          />
          <TVList title={"Top Rated TV Shows"} tvShows={tvShows?.topRatedTV} />
        </div>
      )}
      {filter === "Movies" && (
        <div className="absolute top-[84%] z-30 left-14 w-[93%] text-white">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies?.topRated} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upComingMovies}
          />
        </div>
      )}
      {filter === "TV Shows" && (
        <div className="absolute top-[84%] z-30 left-14 w-[93%] text-white">
          <TVList title={"Airing Today"} tvShows={tvShows?.tvShows} />
          <TVList title={"Popular TV Shows"} tvShows={tvShows?.popularTV} />
          <TVList title={"On The Air"} tvShows={tvShows?.onTheAirTV} />
          <TVList title={"Top Rated TV Shows"} tvShows={tvShows?.topRatedTV} />
        </div>
      )}
      {filter === "Actors" && (
        <div className="absolute top-[84%] z-30 left-14 w-[93%] text-white">
          <ActorLists
            title={"Popular Actors"}
            tvShows={tvShows?.popularActor}
          />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
