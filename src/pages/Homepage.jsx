import React, { useState, useEffect } from "react";
import { getAllData } from "./../util/index";

import Header from "./../components/Header";
import TextInput from "./../components/TextInput";
import CommonIngredients from "./../components/CommonIngredients";
import CommonIngredientsDisplay from "./../components/CommonIngredientsDisplay";
import DietaryFilters from "./../components/dietaryFilters";
import Footer from "./../components/Footer";

function Homepage() {

    const URL = "http://localhost:8000/api/v1/";

    const [message, setMessage] = useState("");
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [dietaryFilter, setDietaryFilter] = useState(null);
  
    useEffect(() => {
      (async () => {
        const myData = await getAllData(URL);
        setMessage(myData.data);
      })();
  
      return () => {
        console.log("unmounting");
      };
    }, []);
  
    const handleIngredientClick = (ingredientName) => {
      const newSelectedIngredients = [...selectedIngredients, ingredientName];
      setSelectedIngredients(newSelectedIngredients);
      console.log(`${ingredientName} has been clicked!`);
    };
  
    const handleFilterSelection = (dietFilter) => {
      setDietaryFilter(dietFilter);
    };

    return (
        <>
            <div className="container">
            <Header />
            <h1> Recipe Bites?</h1>
            <h1>{message}</h1>
            <TextInput
            placeholder="Ingredients..."
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button>Submit</button>
            <p>Must pick a minimum of 3 ingredients to generate a recipe.</p>
            <DietaryFilters onFilterSelection={handleFilterSelection} />
            <CommonIngredientsDisplay
            CommonIngredients={CommonIngredients}
            onIngredientClick={handleIngredientClick}
            />
            <div>
            <Footer />
            </div>
            </div>
        </>
    )
}

export default Homepage