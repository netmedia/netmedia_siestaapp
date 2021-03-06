import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const User = () => {
  const userName = useSelector((state) => state.user.credentials.givenName);
  const imgUrl = useSelector((state) => state.user.credentials.imageUrl);

  return (
    <div className='text-md hidden md:flex absolute right-5 top-5 flex flex-row items-center gap-2'>
      <Image
        src={imgUrl}
        className='rounded-full'
        alt='profile'
        height={50}
        width={50}
      />
      {userName}
    </div>
  );
};

export default User;
