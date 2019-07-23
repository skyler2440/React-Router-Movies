import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import MovieCard from './Movies/MovieCard';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      
        <Switch>
          <Route exact path="/movies/:id" render={(props) => {
            console.log('movie props', props)
          return <Movie {...props} movieList={MovieCard} />}} />
          <Route exact path="/" render={(props) => {
            console.log('home props', props)
          return <MovieList {...props} movieList={MovieCard} />}} />
          {/* <Route exact path="/card" component={MovieCard} /> */}

        </Switch>
      
      </div>
    </div>
  );
};

export default App;
