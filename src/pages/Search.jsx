import React from "react";
import { useState } from "react";
import SearchForm from "../shared-components/SearchForm";
import Title from "../shared-components/Title";
import IngredientsGrid from "../shared-components/IngredientsGrid";
import ReviewCards from "../shared-components/ReviewCards";
import Footer from "../shared-components/Footer";
import RecipesGrid from "../shared-components/RecipesGrid";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    const token = "jwt_secret_recipeapp";
    const url = `http://localhost:8000/api/v1/recipe/search?term=${searchTerm}`;

    console.log("Searching for recipes with ingredients:", searchTerm);

    setIsLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setRecipe(data.recipes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There seems to be an error", error);
        setIsLoading(false);
      });
  };

  const handleIngredientClick = (ingredient) => {
    setSearchTerm((typedSearchTerm) =>
      typedSearchTerm ? `${typedSearchTerm}, ${ingredient}` : ingredient
    );
    console.log("Ingredient clicked:", ingredient);
  };

  return (
    <div>
      <div>
        <div>
          <Title />
          <div>
            <SearchForm
              onSearch={handleSearch}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
          {recipe.length > 0 ? (
            <RecipesGrid recipes={recipe} />
          ) : (
            <IngredientsGrid onIngredientClick={handleIngredientClick} />
          )}
        </div>
        <ReviewCards />
      </div>
      <Footer />
    </div>
  );
}

export default Search;
