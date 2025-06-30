import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header flag={false} app={false} />
      <div className="pt-14">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browser;
