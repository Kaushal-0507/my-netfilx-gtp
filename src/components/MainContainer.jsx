import React, { useState, useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[4];
  console.log(mainMovie);

  const { original_title, overview, id, backdrop_path } = mainMovie;
  return (
    <div className="overflow-x-hidden">
      <VideoBackground movieId={id} image={backdrop_path} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
