import { useContext } from "react";
import { userContext } from "./UserContext";

const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) {
    return <h2>Please Login</h2>;
  }

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Profile;
