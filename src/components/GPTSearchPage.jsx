import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const GPTSearchPage = () => {
  return (
    <div className="text-white">
      <div className="relative flex justify-center p-5 ">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="What would you like to watch?"
            className=" p-3 bg-white/20 w-full rounded-[5px] outline-none"
          />
          <FaCircleArrowUp
            size={28}
            color="lightgray"
            className="absolute right-2 top-2.5 bg-black rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GPTSearchPage;
