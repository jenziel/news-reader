import React from 'react'
import './SearchContainer.css'
import {getSearchResults} from '../../apiCalls'

function SearchContainer() {
  return (
    <div className="search-container">
<form>
  <label class="search-label" for="search">
  <span>Search</span>
  </label>
  <input id="search" type="text" placeholder="Search about recipes" className='search-input'></input>
  <input type="button" value="Search" className='search-btn'></input>
</form>
</div>

  )
}

export default SearchContainer
