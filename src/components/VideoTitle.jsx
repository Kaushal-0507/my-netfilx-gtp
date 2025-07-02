import React from "react";
import VideoBackground from "./VideoBackground";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-46 left-4 my-20 mx-10 z-10">
      <p className=" text-[32px] font-bold my-3 text-white">{title}</p>
      <p className="max-w-[350px] text-sm font-semibold mb-2 text-gray-400 line-clamp-4 overflow-hidden text-ellipsis">
        {overview}
      </p>
      <button
        type="button"
        className="py-2 cursor-pointer px-8 mr-2 bg-red-500/60 rounded-[3px] font-bold text-white "
      >
        Play
      </button>
      <button
        type="button"
        className="py-2 cursor-pointer px-8 bg-white/10 rounded-[3px] font-bold text-white "
      >
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
