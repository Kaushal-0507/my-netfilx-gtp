import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between px-[145px]">
      <Link to="/">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-[200px]"
        />
      </Link>
      <div>
        <button className="py-1.5 px-4 rounded-[5px] bg-red-600 text-white">
          <Link to="login">Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
