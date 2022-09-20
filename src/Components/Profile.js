import { useProfile } from "../hooks/useProfile";

const Profile = () => {
  const { sub } = useProfile();
  return (
    <div>
      <h2>{sub}</h2>
    </div>
  );
};

export default Profile;
