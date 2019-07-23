import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink className="link" to="/">
        <div className="home-button">Home</div>
      </NavLink>
    </div>
  );
};

export default SavedList;
