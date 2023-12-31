import React, { useEffect, useState } from 'react';
import './DetailedView.css';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
function DetailedView({ searchResults, topHeadlines }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let foundArticle;

    if (id.includes('top-headline')) {
      foundArticle = topHeadlines.find((headline) => headline.id === id);
    } else if (id.includes('search-result')) {
      foundArticle = searchResults.find((result) => result.id === id);
    }

    setSelectedArticle(foundArticle);
  }, [id, topHeadlines, searchResults]);
  return (
    <>
      {selectedArticle && (
        <div className='detailed-view-container' >
          <div className='detailed-title-container'>

          <h2>{selectedArticle.title}</h2>
          <p className='detailed-author'>by {selectedArticle.author}</p>
          </div>
          <img src={selectedArticle.urlToImage} className='detailed-view-image'></img>
          <p>{selectedArticle.description}</p>
          <Link to={selectedArticle.url}>
          <p className='detailed-link'>link to full article here</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default DetailedView;