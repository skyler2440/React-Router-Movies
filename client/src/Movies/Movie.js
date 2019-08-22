import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import UpdateForm from './UpdateForm'
import {Link, Route} from 'react-router-dom'
const Movie = props => {
console.log("TCL moive: props", props)
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    // used match id to get the id from the MovieCard

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  const deleteMovie = e => {
    const id = props.match.params.id;
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        props.history.push('/')
      })
      .catch(err => console.log(err.response));
  };
  
  //uncommented this
  
  if (!movie) {
    return <div>Loading movie information...</div>;
  } else {
    return (
      <>
      <MovieCard
        movie={movie}
        title={movie.title}
        director={movie.director}
        metascore={movie.metascore}
        stars={movie.stars}
        button={
          <>
          <Link className="save-button" onClick={saveMovie}>
            Save
          </Link>
         <Link className="delete-button" onClick={deleteMovie} >
          Delete
        </Link>
        </>
        }
        />
      <div className='movie-update'>
          <form>
            <input type='text'
            name='title'
            value={movie.title}/>
            <input type='text'
            name='title'
            value={movie.director}/>
            <input type='text'
            name='title'
            value={movie.metascore}/>
            {movie.stars.map(star => (
              <input type='text'
              name='title'
              value={star}/>
            ))}          
            <button type='submit'>Submit</button>  
          </form>

     </div>
      </>
// Passed the button down as props to the moviecard page so that it wouldn't show on the list
      );
  }
};

export default Movie;
