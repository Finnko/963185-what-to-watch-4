import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import {AuthStatus} from '../../const';
import {AddReviewPage} from './add-review-page';
import {Movie, User} from '../../interfaces';

const mock: Movie[] = [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    thumb: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    releaseYear: 2014,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    backgroundColor: `#f5f5f5`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    director: `Michael Bay`,
    rating: 7.5,
    ratingCount: 250,
    runTime: 199,
    actors: [`Leonardo Di Caprio`],
    genre: `Drama`,
    isFavorite: false,
  }
];
const mockUser: User = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.MOVIES]: {
    loading: false,
    error: false,
    movies: mock,
  },
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  currentMovie: mock[0],
  movieId: mock[0].id,
  onFormSubmit: () => null,
};

describe(`AddReviewPage component render correctly`, () => {
  const history = createMemoryHistory();

  it(`Should AddReviewPage component render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <AddReviewPage
                {...props}
                error={false}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should AddReviewPage component render correctly with loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <AddReviewPage
                {...props}
                error={false}
                loading={true}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should AddReviewPage component render correctly with error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <AddReviewPage
                {...props}
                error={true}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should AddReviewPage component render correctly with init values`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <AddReviewPage
                error={false}
                loading={false}
                movieId={mock[0].id}
                currentMovie={mock[0]}
                onFormSubmit={() => null}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
