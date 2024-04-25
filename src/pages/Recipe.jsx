import React, { useState } from "react";
import "./Recipe.css";
import Title from "../Components/Title";
import RecipesGrid from "../Components/RecipesGrid";
import Footer from "../Components/Footer";
import carrots from "../assets/images/carrots.jpg";

function Recipe() {
  return (
    <div id="pageContainer">
      <h1 id="pageTitle">
        <Title />
      </h1>

      <div id="recipeSectionContainer">
        <h2 id="recipeTitle">Recipe Name Placeholder</h2>

        <div id="recipeContentContainer">
          <div id="recipeContentText">
            <ul id="ingredientsList">
              <p>
                <b>INGREDIENTS</b>
              </p>
              <li className="ingredientItem">Item Placeholder</li>
            </ul>

            <ol id="prepList">
              <p>
                <b>DIRECTIONS</b>
              </p>
              <li className="prepItem">Step Placeholder</li>
            </ol>
          </div>
          <div id="imageProperties">
            <ul>
              <li>Tag List Placeholder</li>
            </ul>
            <img id="recipeImage" src={carrots} />
            <ol>
              <li>Cook Details Placeholder</li>
            </ol>
          </div>
        </div>
        <div id="buttonContainer">
          <button className="pageButtons">
            <b>SAVE</b>
          </button>
          <button className="pageButtons">
            <b>PRINT</b>
          </button>
        </div>
      </div>
      <div id="recipesGrid">
        <RecipesGrid />
      </div>
      <div id="pageFooter">
        <Footer />
      </div>
    </div>
  );
}

export default Recipe;
