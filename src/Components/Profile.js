import { useProfile } from "../hooks/use-profile"

const Profile = () => {
    const { sub } = useProfile();
    return (
        <div>
        <h2>{sub}</h2>
      </div>
    )

};

export default Profile;