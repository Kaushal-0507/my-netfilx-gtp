import React from "react";
import ActorCard from "./ActorCard";
import { useSelector } from "react-redux";

const ActorLists = ({ title, tvShows }) => {
  const filter = useSelector((store) => store.filter);

  return (
    <div className="py-2.5 ">
      <div>
        <p className="font-bold py-2 text-[22px]">{title}</p>
        <div
          className={` overflow-x-scroll  [&::-webkit-scrollbar]:hidden  ${
            filter === "Actors" ? "flex gap-4" : "flex gap-4"
          }`}
        >
          {tvShows?.map((tv) => (
            <ActorCard
              key={tv?.id}
              id={tv?.id}
              poster={tv?.profile_path}
              name={tv?.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorLists;
