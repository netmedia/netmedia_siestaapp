import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const User = () => {
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
