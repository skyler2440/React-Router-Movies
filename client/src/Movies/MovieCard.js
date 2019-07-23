import React from 'react';
import MovieList from "../Movies/MovieList"
import Movie from "../Movies/Movie"
function MovieCard({ title, director, metascore, stars }) {
  console.log('moviecard', title)
  
  return (

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
  
  );
  
   

}

export default MovieCard;