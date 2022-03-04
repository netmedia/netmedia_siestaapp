import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const AddNewBtn = ({ setShowForm }) => {
  return (
    <div className="p-5 ">
      <button
        className="uppercase bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light rounded-xl flex items-center justify-between px-8 py-4 text-white font-medium gap-2"
        onClick={() => {
          setShowForm(true);
        }}
      >
        New entry <AiFillPlusCircle className="fill-white w-8 h-8" />
      </button>
    </div>
  );
};

export default AddNewBtn;
