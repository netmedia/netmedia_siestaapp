import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/user/userActions";

function Logout() {
  let history = useHistory();
  const dispatch = useDispatch();
  const userName =
    useSelector((state) => state.user.userInfo.givenName) ||
    JSON.parse(localStorage.getItem("loginData")).profileObj.givenName;
  const onSuccess = () => {
    dispatch(userLogout(`bye bye ${userName}`));
    localStorage.removeItem("loginData");
    history.push("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
