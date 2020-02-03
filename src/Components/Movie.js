import React from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Movie.css';

const MovieGenre = ({ genre }) => {
    return <span>{genre}</span>;
};

const MoviePoster = ({ poster, alt }) => {
    return <img src={poster} alt={alt} title={alt} />;
};

const Movie = ({ title, poster, genres, summary }) => {
    return (
        <div className="Movie">
            <MoviePoster poster={poster} alt={title} />
            <div className="MovieContents">
                <h2>{title}</h2>
                <div className="MovieGenres">
                    {genres.map((genre, index) => (
                        <MovieGenre genre={genre} key={index} />
                    ))}
                </div>
                <p className="summary" >{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
                {/* <p>{summary.length > 20 ? summary.slice(0, 20) : summary}</p> */}
            </div>
        </div>
    );
};

// const MovieBlock = styled.div`
//     margin-top: 4rem;
// `;

// const MovieConent = styled.div``;

// const Movie = ({ title, poster, genres, summary, rating }) => {
//     return (
//         <MovieBlock>
//             <MoviePoster poster={poster} alt={title} />
//             <MovieConent>
//                 <h1>{title}</h1>
//                 {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
//                 <p>{summary}</p>
//                 <p>{rating}</p>
//             </MovieConent>
//         </MovieBlock>
//     );
// };

// props 속성 관리
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string.isRequired,
};
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
};
export default Movie;
