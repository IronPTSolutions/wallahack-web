import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <h1>
        Profile of {currentUser.firstName} {currentUser.lastName}
      </h1>
    </div>
  );
};

export default Profile;
