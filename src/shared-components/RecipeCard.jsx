import React from "react";
import "./RecipeCard.css";

export default function RecipeCard({ name, imageUrl }) {
  return (
    <div>
      <img id="cardImage" src={imageUrl} alt={name} />
      <p id="recipeName">{name}</p>
    </div>
  );
}
