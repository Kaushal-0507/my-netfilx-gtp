import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[Math.floor(Math.random() * 19)];
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
