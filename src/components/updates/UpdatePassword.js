import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePass, auth } from "../../firebase";
import { login } from "../../store/auth";

const UpdatePassword = () => {
  const { user } = useSelector((state) => state.auth);
  const [newPass, setNewPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    updatePass({
      user,
      newPass,
    });
    dispatch(login(auth.currentUser));
    navigate("/demo");
  };
  return (
    <form
      className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pt-3 "
      onSubmit={handleSubmit}
    >
      <h5 className="w-50 text-center text-danger mb-0">UPDATE PASSWORD</h5>
      <label className=" text-light w-50 text-start  " htmlFor="password">
        Password
      </label>
      <input
        id="password"
        className="p-2  rounded w-50  mt-0 "
        type="password"
        placeholder="Enter Password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
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

export default UpdatePassword;
