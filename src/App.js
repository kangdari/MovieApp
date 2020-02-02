import React from "react";
import Movie from "./Components/Movie";

function App() {



  const movies = [
    {
      title: "1",
      poster:
        "https://i1.wp.com/s3-ap-northeast-1.amazonaws.com/wpstoragepublicshare/posting+img/93adf4cc94ee6641c38e9cb64706abf5cf528229.jpg?resize=680%2C1063&ssl=1"
    },
    {
      title: "2",
      poster:
        "https://file2.nocutnews.co.kr/newsroom/image/2019/09/15/20190915135646676648_0_777_1132.jpg"
    },
    {
      title: "3",
      poster:
        "https://file2.nocutnews.co.kr/newsroom/image/2019/09/15/20190915135646676648_0_777_1132.jpg"
    }
  ];

  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie key={index} title={movie.title} poster={movie.poster} />;
      })}
    </div>
  );
}

export default App;
