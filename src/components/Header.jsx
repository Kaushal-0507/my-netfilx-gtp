import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { addFilter } from "../utils/filterSlice";
import {
  hideGeminiSearch,
  hideGPTPage,
  showGeminiSearch,
  showGPTPage,
} from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { Language } from "@google/genai";
import { loginLanguage } from "../utils/languageConstant";

const Header = ({ flag, app }) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filter);
  const [userMenu, setUserMenu] = useState(false);

  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);
  const navigate = useNavigate();
  const lang = useSelector((store) => store.config.lang);

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

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleUserMenu = () => {
    setUserMenu(!userMenu);
  };
  return (
    <div>
      {app ? (
        <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between py-2 px-[130px] ">
          <Link to="/">
            <img
              src="/geminiLogoNetflix.png"
              alt="logo"
              className="w-[200px] h-[45px]"
            />
          </Link>
          <div className="flex gap-4">
            <select
              name="language"
              className="bg-white/15 outline-1 rounded-[3px] text-white px-2 py-1.5 "
              onClick={(e) => {
                handleChangeLanguage(e);
              }}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black font-semibold"
                >
                  {lang.name}
                </option>
              ))}
            </select>
            {flag && (
              <div>
                <button className="py-1.5 px-4 rounded-[5px] bg-red-600 text-white">
                  <Link to="login">{loginLanguage[lang].signIn}</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between px-10 py-1.5 bg-black ">
          <div className=" flex gap-7">
            <Link to="/browser">
              <img
                alt="logo"
                src="/geminiLogoNetflix.png"
                className="w-[180px] h-[48px] pt-1.5"
              />
            </Link>

            <ul className="flex gap-7 items-center pt-1.5">
              {filters.map((filter) => (
                <li
                  key={filter}
                  className={`font-bold cursor-pointer hover:text-white ${
                    selectedFilter === filter ? "text-white" : "text-white/60"
                  } ${gpt?.gptButton ? "text-white/60" : ""}`}
                  onClick={(e) => {
                    dispatch(addFilter(filter));
                    dispatch(hideGPTPage());
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
              {!gpt.geminiButton ? (
                <div>
                  <div
                    className={`absolute top-2.5 bottom-2.5 left-[82%] bg-gradient-to-r from-cyan-500 to-purple-400 right-[10%] inset-0  rounded-[5px] 
                  group-hover:bg-[length:150%_150%]  
                  -z-10 `}
                  />

                  <button
                    onClick={() => {
                      navigate("/gpt");
                      dispatch(showGeminiSearch());
                    }}
                    className="relative  px-[13px] flex items-center py-2 rounded-[5px] font-bold text-white"
                  >
                    GO GEMINI
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <button
                    className={`px-6 py-[8px]  items-center bg-white  cursor-pointer  font-bold rounded-[5px] 
                  `}
                    onClick={() => {
                      navigate("/gpt");
                      dispatch(hideGeminiSearch());
                    }}
                  >
                    Search
                  </button>
                </div>
              )}
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
