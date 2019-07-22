import React from 'react';
import {Link} from 'react-router-dom'
import "../App.css"
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link className='link' to="/">
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
