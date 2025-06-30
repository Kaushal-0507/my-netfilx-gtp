import React, { useRef, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { validateEmail, validatePassword } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG_IMG, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [emailMsg, setEmailMsg] = useState(null);
  const [pwdMsg, setPwdMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleFormClick = () => {
    const emailMessage = validateEmail(email.current.value);
    setEmailMsg(emailMessage);
    const pwdMessage = validatePassword(password.current.value);
    setPwdMsg(pwdMessage);

    if (emailMessage || pwdMessage) return;

    if (!isLoginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleLoginForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div>
      <Header flag={false} app={true} />
      <div className="absolute top-0 left-0 right-0 w-full h-[597px] z-10 bg-black/50"></div>
      <img
        className="w-full max-h-[597px]"
        src={NETFLIX_BG_IMG}
        alt="netflix-bg"
      />

      <form
        className="absolute top-[75px] z-40 min-w-[500px]  mx-[400px] bg-black/70 rounded-[5px] px-14 pt-6 pb-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="text-white font-bold text-[30px]  mb-6">
          {isLoginForm ? "Sign In " : "Sign Up"}
        </p>

        {!isLoginForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="p-3.5 border-[1px] border-white w-full text-white text-2xl  rounded-[5px] mb-4"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3.5 border-[1px] border-white w-full text-white text-2xl  rounded-[5px]"
        />
        <p className="text-red-600 text-sm mb-4">{emailMsg}</p>
        <div className="relative">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-3.5 border-[1px] border-white w-full text-white text-2xl rounded-[5px] pr-10"
          />
          <p className="text-red-600 text-sm mb-4">{pwdMsg}</p>
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            {showPassword ? (
              <FaRegEye
                onClick={toggleShowPassword}
                color="white"
                size={25}
                className="cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                onClick={toggleShowPassword}
                color="white"
                size={25}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>

        <button
          onClick={() => {
            handleFormClick();
          }}
          className="  p-2 bg-red-600 w-full font-bold cursor-pointer text-white text-2xl rounded-[2px]"
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-2xl text-gray-500 w-full text-center">Or</p>
        <button className="p-2 bg-white/10 w-full cursor-pointer font-semibold text-gray-300 text-2xl rounded-[2px] mb-4">
          Sign in as guest
        </button>
        <p className="text-[16px] text-white ">
          {isLoginForm ? "New to Netflix?" : "Already have an account!"}
          <span
            onClick={() => {
              toggleLoginForm();
            }}
            className="font-bold cursor-pointer pl-1"
          >
            {isLoginForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
