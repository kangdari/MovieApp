import React, { useState, useEffect, useCallback } from 'react';
import Movie from './Components/Movie';
import axios from 'axios';

function App() {
    const [movies, setMovies] = useState(null);
    const url = 'https://yts.mx/api/v2/list_movies.json';

    // 1. axios를 이용한 API 호출
    const callApi = async () => {
        const response = await axios.get(url);
        const movieSet = response.data.data.movies;
        setMovies(movieSet);
    };

    // 2. Promise를 이용한 API 호출
    // useCallback으로 감싸주지 않으면 렌더링할 때마다 getMovies 함수가 생성됨.
    // [] 렌더링될 때 한번만 실행
    const getMovies = useCallback(async () => {
        const movies = await APIcall();
        setMovies(movies);
    }, []);

    const APIcall = () => {
        return fetch(url)
            .then(response => response.json())
            .then(response => response.data.movies)
            .catch(err => console.log(err));
    };

    useEffect(() => {
        callApi(); // 1
        // getMovies(); // 2
    }, []);

    const renderMovies = movies => {
        const moviesList = movies.map(movie => {
            return (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    poster={movie.medium_cover_image}
                />
            );
        });
        return moviesList;
    };

    return <div>{!movies ? 'loading' : renderMovies(movies)}</div>;
}

export default App;
