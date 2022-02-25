import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../utils/refreshToken";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const onSuccess = (googleData) => {
    console.log(googleData);
    localStorage.setItem("loginData", JSON.stringify(googleData));
    refreshTokenSetup(googleData);
    window.location.pathname = "/dashboard";
  };

  const onFailure = (result) => {
    alert("Login failed");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: "offline",
  });

  return (
    <div>
      <button onClick={signIn} className="button">
        <span className="text-white font-regular text-2xl">Login</span>
      </button>
    </div>
  );
}

export default Login;
