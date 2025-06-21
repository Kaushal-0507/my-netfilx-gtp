import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="relative text-5xl w-full">
      <img
        className="w-full max-h-[597px]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt="netflix-bg"
      />
      <div className="absolute top-0 left-0 right-0 w-full h-[597px] z-10 bg-black/60"></div>
      <Outlet />
    </div>
  );
};

export default Body;
