import React from "react";
import {Link} from 'react-router-dom'
import './HeadlinesContainer.css'

function HeadlinesContainer({topHeadlines}) {
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
       
      };
  return (
    <div>
      <h1 className='page-title'>Top Headlines:</h1>
      {topHeadlines
        .filter((headline) => headline.description !== "[Removed]")
        .map((headline) => {
          return (
              <Link to={headline.url} style={linkStyle}>
            <div className='article-preview-card' key={headline.publishedAt}>
                <p className="headline-title-preview">{headline.title}</p>
                {headline.urlToImage && 

                    <img src={headline.urlToImage} className="headline-image"></img>
                
                }
            </div>
              </Link>
          );
        })}
    </div>
  );
}

export default HeadlinesContainer;
