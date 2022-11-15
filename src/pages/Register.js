import React from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, pass);
    navigate("/login");
  };
  
  return (
    <div className="bg-dark vh-100 d-flex flex-column p-5 gap-5 justify-content-center align-items-center">
      <form
        className="d-flex flex-column p-5 gap-5 justify-content-center align-items-center w-100"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 rounded w-50 "
          type="email"
          placeholder="Enter an Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 rounded w-50 "
          type="password"
          placeholder="Enter a Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          className=" btn btn-danger text-dark fs-2 fw-bold w-50"
          disabled={!email || !pass}
          type="submit"
        >
          REGISTER
        </button>
      </form>
      <h6 className="text-danger">Have Account! Perfect</h6>
      <Link className="btn btn-info" to="/login">
        Go To Login
      </Link>
    </div>
  );
};

export default Register;
