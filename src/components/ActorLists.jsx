import React from "react";
import MovieCard from "./MovieCard";

const ActorLists = ({ title, tvShows }) => {
  return (
    <div className="py-2.5 ">
      <div className="flex-col">
        <p className="font-bold py-2 text-[22px]">{title}</p>
        <div className="flex gap-3.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {tvShows?.map((tv) => (
            <MovieCard key={tv?.id} poster={tv?.profile_path} name={tv?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorLists;
