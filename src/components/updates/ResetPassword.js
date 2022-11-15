import React from "react";
import { useSelector } from "react-redux";
import { resetPass } from "../../firebase";

export const ResetPassword = () => {
  const { user } = useSelector((state) => state.auth);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetPass(user.email);
  };
  return (
    <div className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pt-3 ">
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
