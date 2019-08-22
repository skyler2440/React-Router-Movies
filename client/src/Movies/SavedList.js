import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const SavedList = props => {
console.log("TCL savedlist: props", props)
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink key={movie.id} to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
      ))}
      <NavLink className="link" to="/">
        <div className="home-button">Home</div>
      </NavLink>
      {/* changed links to navlinks */}
    </div>
  );
};

export default SavedList;
