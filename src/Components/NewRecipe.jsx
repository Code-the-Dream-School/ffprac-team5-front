import React, { useState } from "react";
import "./NewRecipe.css";
import Title from "./Title";

function NewRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    tags: "",
    prepTime: "",
    cookTime: "",
    directions: "",
    imageUrl: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      imageUrl: imageUrl,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Recipe data:", recipe);
  }

  const totalTime = parseInt(recipe.prepTime) + parseInt(recipe.cookTime);

  return (
    <>
      <div className="title-container">
        <Title />
      </div>
      <div className="new-recipe-container">
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <input
              name="title"
              value={recipe.title}
              onChange={handleChange}
              placeholder="Recipe Title"
              className="title-input"
            />
          </div>

          <div className="form-body">
            <div className="ingredients-container">
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
                className="ingredients-area"
              />
            </div>
            <div className="right-side">
              <input
                name="tags"
                value={recipe.tags}
                onChange={handleChange}
                placeholder="Tags"
                className="tags-input"
              />
              <div className="image-upload-container">
                <label htmlFor="file-upload" className="upload-area">
                  {recipe.imageUrl ? (
                    <img
                      src={recipe.imageUrl}
                      alt="Uploaded Recipe Image"
                      className="recipe-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      Click to upload recipe image
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleImageChange}
                  className="image-upload-input"
                  style={{ display: "none" }}
                />
              </div>
              <div className="details">
                <div className="detail-item">
                  <label className="detail-label">PREP</label>
                  <input
                    name="prepTime"
                    value={recipe.prepTime}
                    onChange={handleChange}
                    placeholder="minutes"
                  />
                </div>
                <div className="detail-item">
                  <label className="detail-label">COOK</label>
                  <input
                    name="cookTime"
                    value={recipe.cookTime}
                    onChange={handleChange}
                    placeholder="minutes"
                  />
                </div>
                <div className="detail-item">
                  <label className="detail-label">TOTAL TIME</label>
                  <span className="total-time">
                    {isNaN(totalTime) ? 0 : totalTime} minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <textarea
            name="directions"
            value={recipe.directions}
            onChange={handleChange}
            placeholder="Directions"
            className="directions-area"
          />
          <div className="save-button">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewRecipe;
