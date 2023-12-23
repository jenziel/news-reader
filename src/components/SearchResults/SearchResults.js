import React from 'react'
import './SearchResults.css'
import ResultCard from '../ResultCard/ResultCard'

function SearchResults({searchResults}) {
console.log('searchResults')
    const resultCards = searchResults.map((result) => {
        return (
          <ResultCard
            title={result.title}
            description={result.description}
            id={result.id}
            url={result.url}
            urlToImage={result.urlToImage}
            publishedAt={result.publishedAt}
            content={result.content}
            />
        )
      })
    
      return (
        <div className='results-container'>
          {resultCards}
        </div>
      )
    }

export default SearchResults
