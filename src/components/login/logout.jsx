import { useHistory } from 'react-router-dom';
import { useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/user/userActions';
import { getFromLocal } from '../../utils/localStorage';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Logout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const loginData = getFromLocal('loginData');
  const onLogoutSuccess = () => {
    dispatch(userLogout(`👋  bye bye ${loginData.givenName}`));
    history.push('/');
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
};

export default Logout;
