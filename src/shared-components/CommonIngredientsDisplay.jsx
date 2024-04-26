import React from "react";


function CommonIngredientsDisplay({ onIngredientClick }) {

  const commonIngredients = [
    { name: "Tomatoes", imageSrc: "/images/tomato.jpg" },
    { name: "Purple onion", imageSrc: "/images/onions.jpeg" },
    { name: "Rice", imageSrc: "/images/rice.jpg" },
    { name: "Green Beans", imageSrc: "/images/greenbeans.jpeg" },
    { name: "Shrimp", imageSrc: "/images/shrimp.jpg" },
    { name: "Red Chilis", imageSrc: "/images/redchilli.jpg" },
    { name: "Carrots", imageSrc: "/images/carrots.jpg" },
    { name: "Zucchini", imageSrc: "/images/zucchini.jpg" },
  ];
  
  return (
    <div>
      <h3>Common Ingredients:</h3>
      {commonIngredients.map((ingredient, Igredientindex) => (
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
