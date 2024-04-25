import RecipeCard from "./RecipeCard";
import "./RecipeGrid.css";
import React from "react";

export default function RecipesGrid() {
  const testRecipes = [
    {
      name: "Spaghetti",
      imageUrl: "src/assets/images/spaghet.jpg",
    },
    {
      name: "Italian Pizza",
      imageUrl: "src/assets/images/original_italian_pizza.jpg",
    },
    {
      name: "Loaded Cheeseburger",
      imageUrl: "src/assets/images/burger.jpg",
    },

    {
      name: "Teriyaki Chicken",
      imageUrl: "src/assets/images/teriyakichicken.jpg",
    },

    {
      name: "Fried Catfish",
      imageUrl: "src/assets/images/friedcatfish.jpg",
    },
  ];

  return (
    <div id="recipeGridContainer">
      <h3 id="gridHeader">
        <b>Similar Recipes</b>
      </h3>
      {testRecipes.map((recipe, index) => (
        <div key={index}>
          <RecipeCard name={recipe.name} imageUrl={recipe.imageUrl} />
        </div>
      ))}
    </div>
  );
}
