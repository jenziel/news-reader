import React from "react";
import "./SearchContainer.css";
import { getSearchResults } from "../../apiCalls";
import { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";
import "../HeadlinesContainer/HeadlinesContainer.css";

function SearchContainer({setSearchResults, searchResults}) {
  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log("search results recent version:", searchResults[0]);
  }, [searchResults]);

  function submitQuery(event) {
    event.preventDefault();
    let searchResultsWithIds;
    getSearchResults(searchTerm)
      .then((data) => {
        if (data) {
          console.log(data, "data");

          // setSearchResults(data.articles);
          // // navigate(`/search/${queryValue}`);

          searchResultsWithIds = data.articles.map((result, index) => ({
            ...result,
            id: `search-result-${index + 1}`,
          }));
        }
      })
      .then(() => {
        setSearchResults(searchResultsWithIds);
        console.log("searchResults", searchResults);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div>
      <h1 className='page-title'>Search by topic:</h1>
      <div className='search-container'>
        <form className='search-form'>
          <button
            className='search-submit-btn'
            onClick={(event) => submitQuery(event)}
          >
            <div className='search-btn-symbol'>⚲</div>
          </button>
          <input
            id='search'
            type='text'
            value={searchTerm}
            placeholder='Search for news'
            className='search-input'
            onChange={(event) => setSearchTerm(event.target.value)}
          ></input>
        </form>
        <SearchResults searchResults={searchResults} />
      </div>
    </div>
  );
}

export default SearchContainer;
