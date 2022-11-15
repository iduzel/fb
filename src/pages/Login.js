import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase";
import { login as loginHandle } from "../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, pass);

    if (user.emailVerified) {
      console.log("userlogin", user);
      navigate("/demo");
    } else {
      console.log("Login error");
      navigate("/update");
    }
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
          LOGIN
        </button>
      </form>

      <h6 className="text-danger">No Account! No Problem</h6>
      <Link className="btn btn-info" to="/register">
        Go To Register
      </Link>
    
    </div>
  );
};

export default Login;
