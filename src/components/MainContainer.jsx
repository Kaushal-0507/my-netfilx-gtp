import React, { useState, useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const tvs = useSelector((store) => store.tv?.topRatedTV);
  const filter = useSelector((store) => store.filter);

  console.log(tvs);
  if (!movies || !tvs) return null;
  const mainMovie = movies[1];
  const mainTV = tvs[0];
  console.log(mainTV);

  const { original_title, overview, id, backdrop_path } = mainMovie;
  return (
    <div>
      {(filter === "Home" || filter === "Movies") && (
        <div className="overflow-x-hidden">
          <VideoBackground movieId={id} image={backdrop_path} />
          <VideoTitle title={original_title} overview={overview} />
        </div>
      )}
      {filter === "TV Shows" && (
        <div className="overflow-x-hidden">
          <VideoBackground movieId={mainTV?.id} image={mainTV?.backdrop_path} />
          <VideoTitle
            title={mainTV?.original_name}
            overview={mainTV?.overview}
          />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
