import React from 'react'
import './Homepage.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import HeadlinesContainer from '../HeadlinesContainer/HeadlinesContainer'

function Homepage({topHeadlines, searchResults, setSearchResults, setSelectedArticle}) {
  return (
    <div className='homepage-container'>

        <SearchContainer searchResults={searchResults} setSearchResults={setSearchResults} setSelectedArticle={setSelectedArticle}/>
        <HeadlinesContainer topHeadlines={topHeadlines} setSearchResults={setSearchResults} setSelectedArticle={setSelectedArticle}/>
    </div>
  )
}

export default Homepage
