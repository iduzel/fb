import React from 'react'
import { useSelector } from 'react-redux';
import { deleteAccount } from '../../firebase';

const DeleteUser = () => {
    const { user } = useSelector((state) => state.auth);

    const handleDeleteAccount = async (e) => {
      e.preventDefault();
      await deleteAccount();
    };
    return (
      <div className="d-flex flex-column align-items-center p-1 gap-1  w-100 border pt-3 ">
        <button
          className=" btn btn-primary text-dark fs-6 fw-bold w-50  gap-1"
          type="submit"
          onClick={handleDeleteAccount}
        >
          DELETE YOUR ACCOUNT
        </button>
      </div>
    );
}

export default DeleteUser