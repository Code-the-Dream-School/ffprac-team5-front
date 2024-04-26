import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewCards.module.css";

function ReviewCards() {
  const userReview = [
    {
      recipeName: "Chicken Fried Rice",
      preparationTime: "25 minutes",
      reviewDisplay: "So good and flavorful. 5/5 stars!",
      imageUrl: "src/assets/images/FriedRice.jpeg",
    },
    {
      recipeName: "Shrimp Alfredo",
      preparationTime: "30 minutes",
      reviewDisplay: "SO glad I used up my leftover shrimp!",
      imageUrl: "src/assets/images/ShrimpAlfredo.jpg",
    },
  ];

  return (
    <div>
      <h4 className={styles.reviewSectionTitle}>
        Reviews from happy people like you:
      </h4>
      <div className={styles.reviewCardsContainer}>
        {userReview.map((userReview, reviewIndex) => (
          <ReviewCard
            key={reviewIndex}
            recipeName={userReview.recipeName}
            preparationTime={userReview.preparationTime}
            reviewDisplay={userReview.reviewDisplay}
            imageUrl={userReview.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewCards;

/* More reviews?? Not sure how many to add*/

/*
      recipeName: "Baked Cod",
      preparationTime: "30 minutes",
      reviewDisplay: "So fast and flavorful!",
      imageUrl: "src/assets/images/BakedCod.jpg",

      recipeName: "Paprika Chicken",
      preparationTime: "45 minutes",
      reviewDisplay: "These recipes are so good!",
      imageUrl: "src/assets/images/PaprikaChicken.jpg",

      recipeName: "Almond Cookies",
      preparationTime: "30 minutes",
      reviewDisplay: "Finally found a good recipe to use up my almond flour!",
      imageUrl: "src/assets/images/AlmondCookies.jpg",


*/
