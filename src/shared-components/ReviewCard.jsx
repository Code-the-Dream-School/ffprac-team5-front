import React from "react";
import styles from "./ReviewCard.module.css";

function ReviewCard({ recipeName, preparationTime, reviewDisplay, imageUrl }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <p className={styles.reviewQuote}>"{reviewDisplay}"</p>
      </div>
      <div className={styles.content}>
        <img src={imageUrl} alt={recipeName} className={styles.image} />
        <div className={styles.details}>
          <p className={styles.reviewName}>{recipeName}</p>
          <p className={styles.reviewPrep}>Prep Time: {preparationTime}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
