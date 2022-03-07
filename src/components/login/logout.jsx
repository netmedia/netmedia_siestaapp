import { useHistory } from "react-router-dom";
import { useGoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/user/userActions";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout() {
  let history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userInfo.givenName);
  const onLogoutSuccess = () => {
    dispatch(userLogout(`bye bye ${userName}`));
    localStorage.removeItem("loginData");
    history.push("/");
  };

  const { signOut } = useGoogleLogout({
    onLogoutSuccess,
    clientId,
  });

  return (
    <div>
      <button
        onClick={signOut}
        className='pr-9 no-underline block text-white font-regular hover:text-siesta-grey-light'
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
