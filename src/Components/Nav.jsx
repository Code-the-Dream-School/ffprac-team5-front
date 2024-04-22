import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
          <li>
            <Link to="/SignupForm">Sign Up</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
