import React from "react";
import IngredientCard from "./IngredientCard";
import styles from "./IngredientsGrid.module.css";

function IngredientsGrid({ onIngredientClick }) {
  const ingredients = [
    { name: "Tomatoes", imageUrl: "src/assets/images/tomato.jpg" },
    { name: "Purple onion", imageUrl: "src/assets/images/onions.jpeg" },
    { name: "Rice", imageUrl: "src/assets/images/rice.jpg" },
    { name: "Green Beans", imageUrl: "src/assets/images/greenbeans.jpeg" },
    { name: "Shrimp", imageUrl: "src/assets/images/shrimp.jpg" },
    { name: "Red Chilis", imageUrl: "src/assets/images/redchilli.jpg" },
    { name: "Carrots", imageUrl: "src/assets/images/carrots.jpg" },
    { name: "Spinach", imageUrl: "src/assets/images/spinach.jpeg" },
    { name: "Potatoes", imageUrl: "src/assets/images/potatoes.jpeg" },
    { name: "Eggs", imageUrl: "src/assets/images/eggs.jpeg" },
    { name: "Lemons", imageUrl: "src/assets/images/lemons.jpeg" },
    { name: "Zucchini", imageUrl: "src/assets/images/zucchini.jpg" },
  ];

  return (
    <div>
      <h3 className={styles.commonIngredientsTitle}>Popular Ingredients:</h3>
      <div className={styles.ingredientsContainer}>
        {ingredients.map((ingredient, index) => (
          <div key={index} onClick={() => onIngredientClick(ingredient.name)}>
            <IngredientCard
              name={ingredient.name}
              imageUrl={ingredient.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientsGrid;
