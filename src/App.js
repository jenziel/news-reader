import "./App.css";
import { getTopHeadlines } from "./apiCalls";
import { useEffect, useState } from "react";
import {Link, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    getTopHeadlines().then((data) => {
      console.log("data", data);
      setTopHeadlines(data.articles)
    });
  }, []);
  return (
    <div>
      <Header/>
   
    <main>

    <div>
      {topHeadlines.length === 0 ? (<p>loading</p>):(
        <Routes>
          <Route path='/' element={

        <div>
        <h2>Top Headlines:</h2>
        {topHeadlines.filter(headline => headline.description !== "[Removed]").map(headline => {
         return  <div className='article-preview-card'>
          <Link to={headline.url}>

            <p key={headline.publishedAt}>
              {headline.title}
            </p>
          </Link>
          </div>
        })}
        </div>
          }>
          </Route>
<Route path='/loading' element={<Loading/>}></Route>
        </Routes>
      )}
    </div>
    </main>
    </div>
  );
}

export default App;
