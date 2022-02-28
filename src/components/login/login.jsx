import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../utils/refreshToken";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {
  let history = useHistory();
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const onSuccess = (googleData) => {
    console.log(googleData);
    localStorage.setItem("loginData", JSON.stringify(googleData));
    refreshTokenSetup(googleData);
    history.push("/dashboard");
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
      <button onClick={signIn} className="">
        <span className="px-2 text-white font-regular text-2xl hover:text-siesta-grey-light hover:border-b-3 hover:border-siesta-grey-light">
          Login
        </span>
      </button>
    </div>
  );
}

export default Login;
