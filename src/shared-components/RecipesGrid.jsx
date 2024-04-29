import RecipeCard from "./RecipeCard";
import "./RecipeGrid.css";
import React from "react";

export default function RecipesGrid({recipes}) {

  return (
    <div id="recipeGridContainer">
      <h3 id="gridHeader">
        <b>Similar Recipes</b>
      </h3>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <RecipeCard name={recipe.name} imageUrl={recipe.imageUrl} />
        </div>
      ))}
    </div>
  );
}
