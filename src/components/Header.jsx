import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { USER_AVATAR } from "../utils/constant";
import { addFilter } from "../utils/filterSlice";
import { setGPTPage, showGPTPage } from "../utils/gptSlice";

const Header = ({ flag, app }) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filter);
  const [userMenu, setUserMenu] = useState(false);
  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store) => store.gpt);
  const navigate = useNavigate();

  const filters = ["Home", "Movies", "TV Shows", "Actors"];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const toggleUserMenu = () => {
    setUserMenu(!userMenu);
  };
  return (
    <div>
      {app ? (
        <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between py-2 px-[130px] ">
          <Link to="/">
            <img src="/NetflixGPT-logo.png" alt="logo" className="w-[200px]" />
          </Link>
          {flag && (
            <div>
              <button className="py-1.5 px-4 rounded-[5px] bg-red-600 text-white">
                <Link to="login">Sign in</Link>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between px-10 py-1.5 bg-black ">
          <div className=" flex gap-7 ">
            <Link to="/browser">
              <img
                alt="logo"
                src="/NetflixGPT-logo.png"
                className="w-[160px] h-[45px]"
              />
            </Link>

            <ul className="flex gap-7 items-center pt-3">
              {filters.map((filter) => (
                <li
                  key={filter}
                  className={`font-bold cursor-pointer hover:text-white ${
                    selectedFilter === filter ? "text-white" : "text-white/60"
                  } ${showGPT ? "text-white/60" : ""}`}
                  onClick={(e) => {
                    dispatch(addFilter(filter));
                    dispatch(setGPTPage());
                    navigate("/browser");
                  }}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className=" flex gap-4">
              <button
                className={`px-4 py-[7px] items-center bg-white/20  cursor-pointer  font-bold rounded-[5px] ${
                  showGPT
                    ? "bg-white/90 text-black hover:bg-white/10 hover:text-white"
                    : "bg-white/20 text-white hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => {
                  dispatch(showGPTPage());
                }}
              >
                GPT Search
              </button>
              <div
                onClick={() => {
                  toggleUserMenu();
                }}
                className=" flex items-center rounded-[5px] cursor-pointer "
              >
                <img
                  src={user.photoURL}
                  className="w-[35px] mr-0.5 rounded-[5px]"
                />
                <RiArrowDropDownLine size={30} color="white" />
              </div>
              {userMenu && (
                <ul className="absolute top-16 right-10 text-sm w-34 bg-black border border-white text-white pt-1.5 font-semibold">
                  <li className="py-1.5 px-2 flex">
                    <img
                      src={user.photoURL}
                      alt="user-avatar"
                      className="w-[20px] mr-1"
                    />
                    {user.displayName || "Display Name"}
                  </li>
                  <li className="flex items-center py-1 px-2">
                    <CiUser size={20} className="pr-1" /> Account
                  </li>
                  <li className="py-1.5 px-2 flex items-center">
                    <IoIosHelpCircleOutline size={20} className="pr-1" />
                    Help Center
                  </li>
                  <li
                    onClick={() => {
                      handleSignOut();
                    }}
                    className="py-2 px-2 border-t text-center cursor-pointer hover:text-white hover:bg-white/20"
                  >
                    Log out
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
