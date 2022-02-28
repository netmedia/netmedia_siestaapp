import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const AddNewBtn = ({ setShowForm }) => {
  return (
    <button
      className='w-3/12 bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light rounded-xl flex items-center  justify-between px-8 py-4 text-white font-normal '
      onClick={() => {
        setShowForm(true);
      }}
    >
      New entry <AiFillPlusCircle className='fill-white w-8 h-8' />
    </button>
  );
};

export default AddNewBtn;
