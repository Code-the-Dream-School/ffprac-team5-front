import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="/">Recipe Finder TBD</a>
        <ul>
          <li>
            <a href="Home">Home</a>
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
