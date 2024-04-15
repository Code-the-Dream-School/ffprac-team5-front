import React from "react";
// import Nav from "./Nav";

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
            <a href="/profile">Profile</a>
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
      {/* <Nav /> */}
    </header>
  );
}

export default Header;
