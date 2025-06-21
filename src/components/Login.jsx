import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleLoginForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div className="absolute top-[75px] z-40  mx-[400px] bg-black/70 rounded-[5px] px-14 py-12">
      {isLoginForm ? (
        <div>
          <p className="text-white font-bold text-3x1 mb-8">Sign In </p>
          <input
            type="email"
            placeholder="Email"
            className="p-3.5 border-[1px] border-white w-full text-white text-2xl mb-4 rounded-[5px]"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-3.5 border-[1px] border-white w-full text-white text-2xl mb-4 rounded-[5px]"
          />
          <div className="absolute top-58 right-18">
            {showPassword ? (
              <FaRegEye
                onClick={() => {
                  toggleShowPassword();
                }}
                color="white"
                size={25}
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => {
                  toggleShowPassword();
                }}
                color="white"
                size={25}
              />
            )}
          </div>
          <button className="  p-2 bg-red-600 w-full font-bold text-white text-2xl rounded-[2px]">
            Sign In
          </button>
          <p className="text-2xl text-gray-500 w-full text-center">Or</p>
          <button className="p-2 bg-white/10 w-full font-semibold text-gray-300 text-2xl rounded-[2px] mb-4">
            Sign in as guest
          </button>
          <p className="text-[16px] text-white ">
            New to Netflix?
            <span
              onClick={() => {
                toggleLoginForm();
              }}
              className="font-bold cursor-pointer pl-1"
            >
              Sign up now.
            </span>
          </p>
        </div>
      ) : (
        <div>
          <p className="text-white font-bold text-3x1 mb-8">Sign Up </p>
          <input
            type="email"
            placeholder="Email"
            className="p-3.5 border-[1px] border-white w-full text-white text-2xl mb-4 rounded-[5px]"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-3.5 border-[1px] border-white w-full text-white text-2xl mb-4 rounded-[5px]"
          />
          <div className="absolute top-58 right-18">
            {showPassword ? (
              <FaRegEye
                onClick={() => {
                  toggleShowPassword();
                }}
                color="white"
                size={25}
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => {
                  toggleShowPassword();
                }}
                color="white"
                size={25}
              />
            )}
          </div>
          <button className="p-2 bg-red-600 w-full font-bold text-white text-2xl rounded-[2px]">
            Sign Up
          </button>
          <p className="text-2xl text-gray-500 w-full text-center">Or</p>
          <button className="p-2 bg-white/10 w-full font-semibold text-gray-300 text-2xl rounded-[2px] mb-4">
            Sign in as guest
          </button>
          <p className="text-[16px] text-white">
            Already have an account!
            <span
              onClick={() => {
                toggleLoginForm();
              }}
              className="font-bold cursor-pointer pl-1"
            >
              Sign In
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
