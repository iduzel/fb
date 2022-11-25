import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginWithGoogle, logout, loginWithGithub } from "../firebase";
import { logout as handleLogout } from "../store/auth";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("HOME USER: ", user);

  const logoutHandle = async (e) => {
    e.preventDefault();
    dispatch(logout());
    handleLogout();
  };

  const handleGoogle = async (e) => {
    e.preventDefault()
    await loginWithGoogle()
  }
  const handleGithub = async (e) => {
    e.preventDefault()
    await loginWithGithub()
  }

  // WS



  return (
    <div className=" bg-sky-700  vh-100 d-flex flex-column  align-items-center">
      {user && (
        <>
          <div
            style={{
              width: "100px",
            }}
            className="rounded "
          >
            <img src={user.photoURL || ""} alt="..." />
          </div>
          <h2 className="text-danger">HELLO {user.displayName}</h2>
        </>
      )}

      <div className=" d-flex flex-column p-5 gap-5 justify-content-center align-items-center w-100">
        <h1 className="text-danger">FIREBASE WORKSHOP </h1>
        {!user && (
          <>
            <Link
              className="p-1 btn btn-primary w-50 fs-1 fw-bold"
              to="/register"
            >
              SIGN UP
            </Link>
            <Link className="p-1 btn btn-primary w-50 fs-1 fw-bold" to="/login">
              SIGN IN
            </Link>
          </>
        )}

        {user && (
          <Link
            onClick={logoutHandle}
            className="p-1 btn btn-primary w-50 fs-1 fw-bold"
            to="/"
          >
            LOGOUT
          </Link>
        )}
      </div>
      <div className="bg-primary w-50 p-2 rounded d-flex gap-1">
        <button type="submit" onClick={handleGoogle} className="btn btn-outline-warning fs-4 fw-bold">GOOGLE</button>
        <button type="submit" onClick={handleGithub} className="btn btn-outline-warning fs-4 fw-bold">Github</button>
      </div>

      <div>
        <h1 className="text-3xl font-bold underline ">
          Hello world!
        </h1>
        <button className="bg-sky-500 hover:bg-sky-700 ">
          Save changes
        </button>

      </div>


    </div>
  );
};

export default Home;
