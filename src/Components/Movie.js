import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MoviePoster = ({poster}) =>{
    return(
        <img src={poster} />
    )
}

const Movie = ({title, poster}) => {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    );
};

// props 속성 관리
Movie.propTypes ={
    title : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
MoviePoster.propTypes ={
    poster: PropTypes.string.isRequired
}


export default Movie;