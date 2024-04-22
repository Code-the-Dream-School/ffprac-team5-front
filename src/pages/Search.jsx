import React from "react";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import Title from "../components/Title";
import DietaryTags from "../components/DietaryTags";
import IngredientsGrid from "../components/IngredientsGrid";
import ReviewCards from "../components/ReviewCards";
import Footer from "../components/Footer";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    //const token = //
    // const url = //

    console.log("Searching for recipes with ingredients:", searchTerm);

    setIsLoading(true);
    fetch(url`${searchTerm}`, {
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
        setRecipe(data);
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
          <DietaryTags />
          <IngredientsGrid onIngredientClick={handleIngredientClick} />
        </div>
        <ReviewCards />
      </div>
      <Footer />
    </div>
  );
}

export default Search;
