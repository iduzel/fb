import React, { useState } from "react";
import { useSelector } from "react-redux";
import { resetPass } from "../../firebase";

export const ResetPassword = () => {
  const { user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetPass(email);
  };
  return (
    <div className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pt-3 ">
      <label className=" text-light w-50 text-start  " htmlFor="name">
        Email
      </label>
      <input
        id="name"
        className="p-2  rounded w-50  mt-0 "
        type="email"
        placeholder="John Doe"
        value={user.email || ""}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className=" btn btn-primary text-dark fs-6 fw-bold w-50  gap-1"
        type="submit"
        onClick={handleResetPassword}
      >
        RESET YOUR PASSWORD
      </button>
    </div>
  );
};
