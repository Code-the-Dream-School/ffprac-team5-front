import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="/">Recipe Finder TBD</a>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="/Profile">Profile</a>
          </li>
          <li>
            <a href="/Ingredients">Ingredients</a>
          </li>
          <li>
            <a href="SavedRecipes">Saved Recipes</a>
          </li>
          <li>
            <a href="CreateRecipe">Create Recipe</a>
          </li>
          <li>
            <a href="SignupORLogin">Sign up / Log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
