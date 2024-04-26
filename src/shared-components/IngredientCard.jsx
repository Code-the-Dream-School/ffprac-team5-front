import React from "react";
import styles from "./IngredientCard.module.css";

function IngredientCard({ name, imageUrl }) {
  return (
    <div>
      <img
        className={styles.imgStyle}
        src={imageUrl}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <p className={styles.ingredientName}>{name}</p>
    </div>
  );
}

export default IngredientCard;
