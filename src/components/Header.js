import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "@firebase/auth";

import { addUser, removeUser } from "../store/userSlice";
// import { toggleGPTSearchView } from "../store/gptSlice";

import { auth } from "../utils/firebase";
import { DEFAULT_USER_PHOTO_URL } from "../utils/constants.js";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // const showGPTSearch = useSelector((store) => store?.gpt?.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({ uid, email, displayName, photoURL }));
        console.log("Here");
        navigate("/music-player");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className={`md:fixed w-full p-4 md:px-12 md:py-6 z-30 md:left-[50%] md:-translate-x-[50%] flex flex-col md:flex-row items-center justify-between ${
        !user ? "bg-none" : "bg-indigo-950 md:bg-linear-180"
      }`}
    >
      <div>
        <h1
          className={`text-3xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF]/92 select-none`}
        >
          Chalne Do
        </h1>
      </div>
      {user && (
        <div className="flex items-center gap-2.5 mt-4 md:mt-0">
          <Link
            to={"/about-us"}
            className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-sm leading-none"
          >
            About
          </Link>
          <Link
            to={"/contact-us"}
            className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-sm leading-none"
          >
            Contact
          </Link>
          <div className="rounded-md overflow-hidden h-8 w-8">
            <img
              className="h-full max-h-full"
              src={!user?.photoURL && DEFAULT_USER_PHOTO_URL}
              alt="User image"
            />
          </div>
          <button
            className="font-bold text-white bg-red-400 px-4 py-2 rounded-sm leading-none cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
