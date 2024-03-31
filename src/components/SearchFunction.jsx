import React, { useState } from "react";
import "./SearchFunction.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function SearchFunction() {
  const [results, setResults] = useState([]);

  return (
    <div className="SearchFunction">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default SearchFunction;
