import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex items-center justify-center absolute bg-error404 bg-cover w-[100%] h-[100%] p-0 flex flex-col">
      <h1 className="text-2xl md:text-3xl font-bold text-white">Error 404</h1>
      <p className="text-xl md:text-4xl text-white">
        Are you sleepwalking now?
      </p>
      <Link
        to="/dashboard"
        className="text-xl md:text-3xl mt-24 text-white hover:text-siesta-grey-light uppercase"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Error404;
