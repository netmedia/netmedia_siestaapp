import React from "react";
import { Link } from "react-router-dom";

function Error401() {
  return (
    <div className="flex items-center justify-center absolute bg-error401 bg-cover w-[100%] h-[100%] p-0 flex flex-col">
      <h1 className="text-2xl md:text-3xl font-bold text-white">Error 401</h1>
      <p className="text-xl md:text-4xl text-white">
        You need to be logged in!
      </p>
      <Link
        to="/"
        className="text-xl md:text-3xl mt-24 text-white hover:text-siesta-grey-light uppercase"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Error401;
