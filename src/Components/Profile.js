import { useProfile } from "../hooks/useProfile";

const Profile = () => {
  const { sub } = useProfile();
  localStorage.setItem("isLoggedIn", JSON.stringify(true));
  return (
    <div>
      <h1 className="title favorites__title">Profile</h1>

      <h2>{sub}</h2>
    </div>
  );
};

export default Profile;
