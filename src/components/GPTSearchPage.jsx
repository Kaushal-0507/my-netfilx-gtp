import React, { useRef, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import useSearchResults from "../hooks/useSearchResults";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTSearchPage = () => {
  const searchText = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  useSearchResults(searchQuery);
  const { people, media } = useSelector((state) => state.searchResult);

  const handleGptSearchClick = () => {
    const query = searchText.current.value;
    console.log(query);
    setSearchQuery(query);
  };

  return (
    <div className="flex-col justify-center text-white">
      <div className="flex justify-center p-5 ">
        <div className="relative flex  w-1/2">
          <input
            type="text"
            ref={searchText}
            placeholder="Search Movies | Tv Shows | Actors"
            className=" p-3 bg-white/20 w-full rounded-[5px] outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleGptSearchClick();
              }
            }}
          />
          <FaCircleArrowUp
            size={28}
            color="lightgray"
            className="absolute right-2 top-2.5 bg-black rounded-full"
            onClick={(e) => {
              handleGptSearchClick();
            }}
          />
        </div>
      </div>

      <div className="text-white mx-18 my-2">
        {people?.length > 0 && (
          <div>
            <p className="font-bold text-2xl py-2.5"> Actor</p>
            <div className="flex gap-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden mb-3">
              {people?.map((p) => (
                <MovieCard
                  key={p?.id}
                  poster={p?.profile_path}
                  name={p?.name}
                />
              ))}
            </div>
          </div>
        )}
        <div>
          {media?.length > 0 && (
            <div>
              <p className="font-bold text-2xl py-2.5">Media</p>
              <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                {media?.map((m) => (
                  <MovieCard key={m?.id} poster={m?.poster_path} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
