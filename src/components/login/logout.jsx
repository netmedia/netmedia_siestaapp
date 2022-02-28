import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

function Logout() {
  let history = useHistory();

  const onSuccess = () => {
    localStorage.removeItem("loginData");
    history.push("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
