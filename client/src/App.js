import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";
const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route
            exact
            path="/movies/:id"
            render={props => {
              return (
                <Movie
                  {...props}
                  movieList={MovieCard}
                  addToSavedList={addToSavedList}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={props => {
              return <MovieList {...props} movieList={MovieCard} />;
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
