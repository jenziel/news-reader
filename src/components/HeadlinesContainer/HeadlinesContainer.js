import React from "react";
import {Link} from 'react-router-dom'
import './HeadlinesContainer.css'
import SearchContainer from "../SearchContainer/SearchContainer";

function HeadlinesContainer({topHeadlines, setSearchResults}) {
    const dayjs = require('dayjs')
    dayjs().format()
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
       
      };
  return (
    <div className="top-headlines-container">
      <h1 className='page-title'>Top Headlines:</h1>
      {topHeadlines
        .filter((headline) => headline.description !== "[Removed]")
        .map((headline) => {
            const publishedDate = dayjs(headline.publishedAt);
            const currentDate = dayjs();
            const minutesSincePublished = currentDate.diff(publishedDate, "minute");
            let timeAgo;
          if (minutesSincePublished < 60) {
            timeAgo = `${minutesSincePublished} minutes ago`;
          } else if (minutesSincePublished < 1440) {
            const hours = Math.floor(minutesSincePublished / 60);
            const remainingMinutes = minutesSincePublished % 60;
            timeAgo = `${hours} ${hours === 1 ? "hour" : "hours"} ${remainingMinutes} ${
              remainingMinutes === 1 ? "minute" : "minutes"
            } ago`}
            else {
                const days = Math.floor(minutesSincePublished / 1440);
                timeAgo = `${days} ${days === 1 ? "day" : "days"} ago`;
              }
          return (
              <Link to={`/article/${headline.id}`} style={linkStyle} key={`${headline.publishedAt}${Date.now()}`}>
            <div className='article-preview-card' >
                <p className="headline-title-preview">{headline.title}</p>
                {headline.urlToImage && 

                    <img src={headline.urlToImage} className="headline-image"></img>
                
                }
                {headline.description &&

                <p className="headline-title-caption">{headline.description}</p>
                }
                <p className="minutes-since-published">
                  {`Published ${timeAgo}`}
                </p>
            </div>
              </Link>
          );
        })}
    </div>
  );
}

export default HeadlinesContainer;
