import React from "react";
import { useState } from "react";
import { update, auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(user.photoURL || "");
  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });

    dispatch(login(auth.currentUser));
    navigate("/demo");
  };
  return (
    <form
      className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pb-3 "
      onSubmit={handleSubmit}
    >
      <h5 className="w-50 text-center text-danger mb-0">UPDATE PROFILE</h5>
      <label className=" text-light w-50 text-start  " htmlFor="name">
        Name
      </label>

      <input
        id="name"
        className="p-2  rounded w-50  mt-0 mb-2"
        type="text"
        placeholder="John Doe"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />

      <label className=" text-light w-50 text-start  " htmlFor="photo">
        PHOTO
      </label>
      <input
        id="photo"
        className="p-2  rounded w-50  mt-0 "
        type="text"
        placeholder="John Doe"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <button
        className=" btn btn-primary text-dark fs-6  fw-bold w-50"
        type="submit"
      >
        UPDATE
      </button>
    </form>
  );
};

export default UpdateProfile;
