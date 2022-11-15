import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";

const DemoPage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle("user"));

    navigate("/login", {
      replace: true,
    });
  };


  return (
    <div className="bg-dark text-danger fs-1 vh-100 d-flex flex-column p-5 gap-5 justify-content-center align-items-center">
      {user && (
        <div>
          <h1>WELCOME ON BOARD {user.displayName || user.email}</h1>
          <h2>{user.email} is my EMAIL </h2>
          <h6 onClick={handleLogout} className="btn btn-danger mt-5 w-100">
            LOGOUT
          </h6>
        </div>
      )}

   
    </div>
  );
};

export default DemoPage;
