import React from 'react';

const Detail = ({ location, history }) => {
    if (location.state === undefined){
        history.push('/'); // redirect
        return null ; 
    }
    const { title, poster, genres, summary } = location.state;
    
    return (
        <div>
            {title}
            {poster}
            {genres}
            {summary}
        </div>
    );
};

export default Detail;
