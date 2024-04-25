import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nContainer">
      <p>Recipe Finder</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/NewRecipe">New Recipe</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
          <li>
            <a href="/Ingredients">Ingredients</a>
          </li>
          <li>
            <Link to="/SignupForm">Sign Up</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
