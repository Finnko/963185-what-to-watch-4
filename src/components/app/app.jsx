import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../../history';
import MoviePropType from '../../prop-types/movie';
import {PathName} from '../../const';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

const App = ({promo, movies}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PathName.ROOT}>
          <Main
            promo={promo}
            movies={movies}
          />
        </Route>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          {({match}) => (
            <MoviePage movies={movies} match={match}/>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

export default App;
