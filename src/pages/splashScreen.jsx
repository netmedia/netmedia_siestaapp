import React from "react";
import Login from "../components/login/login";
import { Image } from "react-bootstrap";
import urlImg from "../assets/splash.jpeg";

import StarfieldAnimation from "react-starfield-animation";

function SplashScreen() {
  return (
    <div className="">
      <div className="absolute -z-1 w-[100%] h-[100%]">
        <StarfieldAnimation
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <div className="w-[100%] h-[100%]">
          <Image fluid src={urlImg} className="w-[100%] h-[100%]" />
        </div>
      </div>
      <div className="z-20 text-white absolute text-3xl md:text-4xl font-regular font-bold p-10">
        Siesta.
      </div>
      <div className="z-20 text-white absolute text-md md:text-2xl font-regular italic top-[10%] p-10">
        Entrust us with your dreams
      </div>
      <div className="absolute z-10 left-[37%] md:left-[45%] top-[50%]">
        <Login />
      </div>
    </div>
  );
}

export default SplashScreen;
