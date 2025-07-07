import React from "react";
import TVCard from "./TVCards";

const TVList = ({ title, tvShows }) => {
  if (!tvShows) return;
  return (
    <div className="py-2.5 ">
      <div className="flex-col">
        <p className="font-bold py-2 text-[22px]">{title}</p>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {tvShows?.map((tv) => (
            <TVCard key={tv?.id} id={tv?.id} poster={tv?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVList;
