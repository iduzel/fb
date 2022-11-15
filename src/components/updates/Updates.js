import React from "react";
import { useSelector } from "react-redux";
import UpdateEmail from "./UpdateEmail";
import UpdateProfile from "./UpdateProfile";
import VerifyEmail from "./VerifyEmail";
import UpdatePassword from "./UpdatePassword"
import { ResetPassword } from "./ResetPassword";
import DeleteUser from "./DeleteUser";

const Updates = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-dark vh-100 d-flex justify-content-between ">
      {user.photoURL && (
        <div
          className="border d-flex flex-column align-items-center pt-5"
          style={{ width: "300px" }}
        >
          <h6 className="  text-danger mb-0">{user.displayName}</h6>
          <img
            style={{ width: "70%" }}
            src={user.photoURL}
            alt="..."
            className="rounded "
          />
        </div>
      )}
      <div className="d-flex flex-column w-100 border border-5 border-danger">
        <UpdateProfile />
        <UpdateEmail />
        <UpdatePassword />
        <VerifyEmail />
        <ResetPassword />
        <DeleteUser />
      </div>
    </div>
  );
};

export default Updates;
