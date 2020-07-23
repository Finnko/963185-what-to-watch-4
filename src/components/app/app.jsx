import React from 'react';
import {Router, Route, Switch, withRouter} from 'react-router-dom';
import history from '../../history';
import {PathName} from '../../const';
import MainPage from '../../pages/main-page/main-page.jsx';
import MoviePage from '../../pages/movie-page/movie-page.jsx';
import AddReviewPage from '../../pages/add-review-page/add-review-page.jsx';
import SignIn from '../../pages/sign-in/sign-in.jsx';
import MyListPage from '../../pages/my-list-page/my-list-page.jsx';
import PlayerPage from '../../pages/player-page/player-page.jsx';
import PrivateRoute from '../private-route/private-route.jsx';

const AddReviewPageWrapped = withRouter(AddReviewPage);
const MoviePageWrapped = withRouter(MoviePage);
const PlayerPageWrapped = withRouter(PlayerPage);

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PathName.ROOT}>
          <MainPage />
        </Route>
        <Route path={`${PathName.SIGN_IN}`}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact={false}
          path={`${PathName.MOVIE_PAGE}:id${PathName.ADD_REVIEW}`}
          render={() => {
            return <AddReviewPageWrapped />;
          }}
        >
        </PrivateRoute>
        <Route path={`${PathName.MOVIE_PAGE}:id`}>
          <MoviePageWrapped />
        </Route>
        <Route path={`${PathName.PLAYER}:id`}>
          <PlayerPageWrapped />
        </Route>
        <PrivateRoute
          exact
          path={`${PathName.MY_LIST}`}
          render={() => {
            return <MyListPage />;
          }}
        >
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;
