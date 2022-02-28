import { useContext } from "react";
import { userContext } from "./UserContext";

const loginGuard = (Component) => {
  const Guarded = (props) => {
    const { user } = useContext(userContext);
    if (user) {
      return <Component {...props} user={user} />;
    }
    return null;
  };

  return Guarded;
};

export default loginGuard;

//ha csak navbarban akarom eltakarni a logged in buttont akkor nem kell ezt hasznalni, csak akkor ha egesz lapot jelenitek meg
