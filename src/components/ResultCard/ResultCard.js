import React from "react";
import "./ResultCard.css";
import dayjs from 'dayjs';
import 'dayjs/locale/en'; 
import {Link} from 'react-router-dom';
function ResultCard({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  id,
  key,
  content,
}) {
  dayjs.locale('en'); 

  const formattedDate = dayjs(publishedAt).format('dddd MMM D');

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <div className='card' key={id} id={id}>
      <div className='card-top'>
        <div className='card-left'>
        <Link to={`/article/${id}`} style={linkStyle} >
          <h3>{title}</h3>
        </Link>
          <p>{description}</p>
        </div>
          {urlToImage && 
        <div className='card-right'>
          <img src={urlToImage} className='search-result-img' alt='News Image' />
        </div>
          }
      </div>
      <div className='card-bottom'>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}

export default ResultCard;