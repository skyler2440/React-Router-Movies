import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
      ))}
      <NavLink className="link" to="/">
        <div className="home-button">Home</div>
      </NavLink>
    </div>
  );
};

export default SavedList;
