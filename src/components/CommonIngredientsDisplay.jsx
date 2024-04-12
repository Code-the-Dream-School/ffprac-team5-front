import React from "react";

function CommonIngredientsDisplay({ CommonIngredients, onIngredientClick }) {
  return (
    <div>
      <h3>Common Ingredients:</h3>
      {CommonIngredients.map((ingredient, Igredientindex) => (
        <div
          key={Igredientindex}
          onClick={() => onIngredientClick(ingredient.name)}
        >
          <img
            src={ingredient.imageSrc}
            style={{ width: "100px", height: "100px" }}
          />
          <p>{ingredient.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CommonIngredientsDisplay;
