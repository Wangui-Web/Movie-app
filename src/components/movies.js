import React from 'react';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";


function Movies({ title, poster_path, vote_average, overview }) {
        return  <div className="movie">
           
            <img className='image' src={IMGPATH + poster_path} alt={title} />
            <div className="info">
                <h3>{title}</h3>
                <p> {vote_average}/10</p>
            </div>
            <div className="overview">
                <h4>Overview:</h4>
                <p>{overview}</p>
            </div>
        </div >
}

export default Movies
