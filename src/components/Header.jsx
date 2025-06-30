import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { USER_AVATAR } from "../utils/constant";

const Header = ({ flag, app }) => {
  const [userMenu, setUserMenu] = useState(false);
  const user = useSelector((store) => store.user);

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
        <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between py-2 px-[130px]">
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
        <div className="absolute z-20 top-0 left-0 right-0 flex items-center justify-between px-10 py-1.5 ">
          <div>
            <Link to="/browser">
              <img
                alt="logo"
                src="/NetflixGPT-logo.png"
                className="w-[160px] h-[45px]"
              />
            </Link>
          </div>
          <div>
            <div className="relative">
              <div
                onClick={() => {
                  toggleUserMenu();
                }}
                className="py-1.5 flex items-center rounded-[5px] cursor-pointer "
              >
                <img
                  src={user.photoURL}
                  alt="user-avatar"
                  className="w-[35px] mr-0.5 rounded-[5px]"
                />
                <RiArrowDropDownLine size={30} />
              </div>
              {userMenu && (
                <ul className="absolute top-14 right-1 text-sm w-34 bg-black text-white pt-1.5 font-semibold">
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
