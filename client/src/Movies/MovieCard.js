import React from "react";

function MovieCard({ title, director, metascore, stars, button }) {
  //passed in the props from movies and movielist
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {button}
    </div>
    // returned the button from the movie component so that it would not show on the list
  );
}

export default MovieCard;
