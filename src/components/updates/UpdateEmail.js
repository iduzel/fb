import React from "react";
import { useState } from "react";
import { updateMail, auth, verifyEmail } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../../store/auth";
import VerifyEmail from "./VerifyEmail";

const UpdateEmail = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("user UPDATE EMAIL", user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(user.email);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("EMAIL SUBMIT", email);
    await updateMail({
      email,
    });
    dispatch(login(auth.currentUser));
    navigate("/demo");
  };

  return (
 
      <form
      className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pt-3 "
        onSubmit={handleSubmit}
      >
        <h5 className="w-50 text-center text-danger mb-0">UPDATE EMAIL</h5>
        <label className=" text-light w-50 text-start  " htmlFor="name">
          Email
        </label>
        <input
          id="name"
          className="p-2  rounded w-50  mt-0 "
          type="email"
          placeholder="John Doe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className=" btn btn-primary text-dark fs-6 fw-bold w-50"
          type="submit"
        >
          UPDATE
        </button>
      </form>
 
  );
};

export default UpdateEmail;
