import React from "react";
import {Link , Route} from 'react-router-dom';
function MovieCard(props) {
  //passed in the props from movies and movielist
  return (
    <>
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{props.title}</h2>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {props.button}
      </div>
     
     </>
    // returned the button from the movie component so that it would not show on the list
  );
}

export default MovieCard;
