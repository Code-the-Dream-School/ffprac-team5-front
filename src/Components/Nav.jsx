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
            <Link to="/LoginForm">Login</Link>
          </li>
          <li>
            <Link to="/SignupForm">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
