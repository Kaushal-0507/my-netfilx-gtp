import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpComingMovie from "../hooks/useUpComingMovie";

const Browser = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();
  return (
    <div className="w-full h-full">
      <Header flag={false} app={false} />
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browser;
