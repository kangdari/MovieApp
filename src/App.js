import React, { useState, useEffect } from "react";
import Movie from "./Components/Movie";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState(null);

  const url = "https://yts.mx/api/v2/list_movies.json";

  // axios를 이용한 API 호출
  const callApi = async () => {
    const response = await axios.get(url);
    const movieSet = response.data.data.movies;
    setMovies(movieSet);
  };

  useEffect(() => {
    callApi();
    // Promise를 이용한 API 호출
    // fetch(url)
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.log(err))
  }, []);

  const renderMovies = movies => {
    const moviesList = movies.map((movie, index) => {
      return (
        <Movie
          key={index}
          title={movie.title}
          poster={movie.medium_cover_image}
        />
      );
    });
    return moviesList;
  };

  return <div>{!movies ? "loading" : renderMovies(movies)}</div>;
}

export default App;
