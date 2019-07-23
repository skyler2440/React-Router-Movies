import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import "../App.css"
import MovieCard from './MovieCard';

const MovieList = props => {
  console.log('movieList props', props)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
          
  return (
    
    <div className="movie-list">
      {movies.map(movie => (
        <NavLink className='link' to={`/movies/${movie.id}`} key={`/movies/${movie.id}`}>
        <MovieCard key={movie.id} movie={movie} title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars} />
        </NavLink>
      ))}
    </div>
  );
}


export default MovieList;
