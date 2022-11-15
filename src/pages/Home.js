import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginWithGoogle, logout } from "../firebase";
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
  return (
    <div className=" bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">
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
              className="p-5 btn btn-primary w-50 fs-1 fw-bold"
              to="/register"
            >
              SIGN UP
            </Link>
            <Link className="p-5 btn btn-primary w-50 fs-1 fw-bold" to="/login">
              SIGN IN
            </Link>
          </>
        )}

        {user && (
          <Link
            onClick={logoutHandle}
            className="p-5 btn btn-primary w-50 fs-1 fw-bold"
            to="/"
          >
            LOGOUT
          </Link>
        )}
      </div>
      <div className="bg-primary w-50 p-4 rounded">
        <button type="submit" onClick={handleGoogle} className="btn btn-primary fs-3">GOOGLE</button>
      </div>
    </div>
  );
};

export default Home;
