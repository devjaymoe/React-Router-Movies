import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  //console.log(savedList);
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList}/> 

      <Route path='/movies/:id'>
          <Movie />
      </Route>

      <Route path='/'>
          <MovieList />
      </Route>

        

    </div>
  );
};

export default App;
