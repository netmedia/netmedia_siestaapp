import { Image } from "react-bootstrap";

function User() {
  const user = JSON.parse(localStorage.getItem("loginData")).profileObj
    .givenName;
  const imgUrl = JSON.parse(localStorage.getItem("loginData")).profileObj
    .imageUrl;

  return (
    <div className="text-md absolute right-5 top-5 flex flex-row items-center gap-2">
      <Image
        src={imgUrl}
        className="rounded-full"
        alt="profile"
        height={50}
        width={50}
      />
      {user}
    </div>
  );
}

export default User;
