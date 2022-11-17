import React, { useState } from "react";
import { useSelector } from "react-redux";
import { verifyEmail } from "../../firebase";

const VerifyEmail = () => {
 
  const { user } = useSelector((state) => state.auth);
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    await verifyEmail();
  };
  return (
    <div className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pt-3 ">
    
      <button
        className=" btn btn-primary text-dark fs-6 fw-bold w-50  gap-1"
        type="submit"
        onClick={handleVerifyEmail}
      >
        VERIFY YOUR EMAIL
      </button>
    </div>
  );
};

export default VerifyEmail;
