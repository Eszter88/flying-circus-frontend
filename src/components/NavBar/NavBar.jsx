import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/test">Test</Link>
      </div>
    </nav>
  );
};

export default NavBar;
