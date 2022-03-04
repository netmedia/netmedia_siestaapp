import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
// import {useDispatch, useSelector} from "react-redux"

const User = () => {
  // TODO //
  // definirat switch kraj profilne slike mozda
  // na klik minjat darkMode

  // const dispatch = useDispatch()

  // na switch komponenti: onClick(() => {dispatch(toggleClrTheme())})

  // TODO //

  const user =
    useSelector((state) => state.user.userInfo.givenName) ||
    JSON.parse(localStorage.getItem("loginData")).profileObj.givenName;
  const imgUrl =
    useSelector((state) => state.user.userInfo.imageUrl) ||
    JSON.parse(localStorage.getItem("loginData")).profileObj.imageUrl;

  return (
    <div className='text-md hidden md:flex absolute right-5 top-5 flex flex-row items-center gap-2'>
      <Image src={imgUrl} className='rounded-full' alt='profile' height={50} width={50} />
      {user}
    </div>
  );
};

export default User;
