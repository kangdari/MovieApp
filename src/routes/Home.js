import React, { useState, useEffect } from 'react';
// import { useCallback } from 'react';
import './Home.css';
import Movie from '../Components/Movie';
import axios from 'axios';

function Home() {
    const [movies, setMovies] = useState(null);
    const url = 'https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=10';
    // const url = 'https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=10&page=1';

    // 1. axios를 이용한 API 호출
    const callApi = async () => {
        const response = await axios.get(url);
        const movieSet = response.data.data.movies;
        setMovies(movieSet);
    };

    // 2. Promise를 이용한 API 호출
    // useCallback으로 감싸주지 않으면 렌더링할 때마다 getMovies 함수가 생성됨.
    // [] 렌더링될 때 한번만 실행
    // const getMovies = useCallback(async () => {
    //     const movies = await APIcall();
    //     setMovies(movies);
    // }, []);

    // const APIcall = () => {
    //     return fetch(url)
    //         .then(response => response.json())
    //         .then(response => response.data.movies)
    //         .catch(err => console.log(err));
    // };

    useEffect(() => {
        callApi(); // 1
        // getMovies(); // 2
    }, []);

    // titile, genres, rating, summary, medium_cover_image
    const renderMovies = movies => {
        const moviesList = movies.map(movie => {
            return (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    summary={movie.summary}
                />
            );
        });
        return moviesList;
    };
    return (
        <div className="container">
            <div className={!movies ? 'Loading' : 'MovieBlock'}>
                {!movies ? 'Loading' : renderMovies(movies)}
            </div>
        </div>
    );
}

export default Home;