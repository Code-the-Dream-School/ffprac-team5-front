import React, { useEffect, useState } from "react";
import styles from "./SearchForm.module.css";

function SearchForm({ onSearch, searchTerm, setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <p className={styles.formP}>
        Type in or click an ingredient from the list below:
      </p>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter ingredients..."
          className={styles.input}
        />
        <button type="submit" className={styles.searchButton}>
          Search{" "}
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
