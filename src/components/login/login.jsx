import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { useDispatch, useSelector } from 'react-redux';
import {
  userLoginFailure,
  userLoginSuccess,
} from '../../redux/user/userActions';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.credentials.loggedIn);
  let history = useHistory();
  const dispatch = useDispatch();

  const onSuccess = (googleData) => {
    dispatch(
      userLoginSuccess(
        googleData.profileObj,
        `🙋  Welcome ${googleData.profileObj.givenName}`
      )
    );
    refreshTokenSetup(googleData);
    history.push('/dashboard');
  };

  const onFailure = () => {
    dispatch(userLoginFailure(`Login failed, try again please :D`));
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <div>
      <button
        onClick={() => {
          if (isUserLogged) {
            history.push('/dashboard');
          } else {
            signIn();
          }
        }}
        className=''
      >
        <span className='px-2 text-white font-regular text-2xl hover:text-siesta-grey-light hover:border-b-3 hover:border-siesta-grey-light'>
          Login
        </span>
      </button>
    </div>
  );
};

export default Login;
