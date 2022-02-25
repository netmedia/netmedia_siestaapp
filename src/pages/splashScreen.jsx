import React from "react";
import Login from "../components/login/login";
import { Image } from "react-bootstrap";
import urlImg from "../assets/splashScreen.jpg";

function SplashScreen() {
  return (
    <div className="">
      <div className="absolute -z-1 w-[100%] h-[100%]">
        <Image fluid src={urlImg} className="w-[100%] h-[100%]" />
      </div>
      <div className="z-20 text-white absolute text-4xl font-regular font-bold p-10">
        Siesta.
      </div>
      <div className="z-20 text-white absolute text-2xl font-regular italic top-[10%] p-10">
        Entrust us with your dreams
      </div>
      <div className="absolute z-10 left-[45%] top-[50%]">
        <Login />
      </div>
    </div>
  );
}

export default SplashScreen;
