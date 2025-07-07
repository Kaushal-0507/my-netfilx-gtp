import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import TVCard from "./TVCards";
import ActorCard from "./ActorCard";

const GeminiResults = () => {
  const { geminiResults, resultsName } = useSelector((store) => store.gpt);

  if (!geminiResults)
    return (
      <div className="absolute left-[38%] top-[30%]  text-3xl font-bold">
        What's on your mind?
      </div>
    );

  return (
    <div className="bg-white/10  mx-10 px-2 py-2 rounded-[5px]">
      <div className="flex gap-6 ">
        {geminiResults.map((result) => {
          const item = result[0];
          if (!item) return null;

          switch (item?.media_type) {
            case "movie":
              return (
                <MovieCard
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                />
              );
            case "tv":
              return (
                <TVCard key={item.id} id={item.id} poster={item.poster_path} />
              );
            case "person":
              return (
                <ActorCard
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                  name={item.name}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default GeminiResults;
