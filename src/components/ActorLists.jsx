import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const ActorLists = ({ title, tvShows }) => {
  const filter = useSelector((store) => store.filter);
  return (
    <div className="py-2.5 ">
      <div className="flex-col">
        <p className="font-bold py-2 text-[22px]">{title}</p>
        <div
          className={`flex overflow-x-scroll [&::-webkit-scrollbar]:hidden ${
            filter === "Actors" ? "flex-wrap gap-6" : "flex gap-4"
          }`}
        >
          {tvShows?.map((tv) => (
            <MovieCard key={tv?.id} poster={tv?.profile_path} name={tv?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorLists;
