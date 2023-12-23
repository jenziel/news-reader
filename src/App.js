import "./App.css";
import { getTopHeadlines } from "./apiCalls";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Homepage from "./components/Homepage/Homepage";
import DetailedView from "./components/DetailedView/DetailedView";

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    getTopHeadlines().then((data) => {
      const articlesWithIds = data.articles.map((article, index) => ({
        ...article,
        id: `top-headline${index + 1}`, 
      }));
      setTopHeadlines(articlesWithIds);
        console.log("topHeadlines", topHeadlines);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
          {topHeadlines?.length === 0 ? (
            <p>loading</p>
          ) : (
            <Routes>
              <Route
                path='/'
                element={
                  <Homepage
                    topHeadlines={topHeadlines}
                    searchResults={searchResults}
                    setSearchResults={setSearchResults}
                    setSelectedArticle={setSelectedArticle}
                  />
                }
              ></Route>
              <Route path='/article/:id' element={<DetailedView searchResults={searchResults} topHeadlines={topHeadlines}/>}></Route>
              <Route path='/loading' element={<Loading />}></Route>
            </Routes>
          )}
 </main>
    </div>
  );
}

export default App;
