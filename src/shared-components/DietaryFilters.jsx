import React from "react";

function DietaryFilters({ onFilterSelection }) {
  return (
    <div>
      <button onClick={() => onFilterSelection("vegetarian")}>
        Vegetarian
      </button>
      <button onClick={() => onFilterSelection("vegan")}>Vegan</button>
      <button onClick={() => onFilterSelection("gluten-free")}>
        Gluten-Free
      </button>
    </div>
  );
}

export default DietaryFilters;
