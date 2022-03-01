import { useContext, useEffect } from "react";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const loginGuard = (Component) => {
  const Guarded = (props) => {
    const navigate = useNavigate();
    const { user } = useContext(userContext);

    useEffect(() => {
      if (!user) {
        navigate("/");
      }
    }, [navigate, user]);

    if (user) {
      //ha nincsen user azaz nem vagyok bejelentkezve akkor a lenti komponenst nem jeleníti meg
      return <Component {...props} user={user} />;
    }
    return null;
  };

  return Guarded;
};

export default loginGuard;

//ha csak navbarban akarom eltakarni a logged in buttont akkor nem kell ezt hasznalni, csak akkor ha egesz lapot jelenitek meg
