import "./App.css";
// import { getTopHeadlines } from "./apiCalls";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { dummyData } from "./dummyData";
import HeadlinesContainer from "./components/HeadlinesContainer/HeadlinesContainer";
function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    setTopHeadlines(dummyData.articles);
    console.log("topHeadlines", topHeadlines);

    // getTopHeadlines().then((data) => {
    //   console.log("data", data);
    //   setTopHeadlines(data.articles)
    // });
  }, []);
  return (
    <div>
      <Header />

      <main>
        <div>
          {topHeadlines?.length === 0 ? (
            <p>loading</p>
          ) : (
            <Routes>
              <Route
                path='/'
                element={
           <HeadlinesContainer topHeadlines={topHeadlines}/>
                }
              ></Route>
              <Route path='/loading' element={<Loading />}></Route>
            </Routes>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
