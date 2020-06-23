import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MoviePage from './movie-page';

const mock = [
  {
    id: `1`,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseYear: 2014,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    director: `Michael Bay`,
    actors: [`Leonardo Di Caprio`],
    rating: 7.5,
    ratingCount: 250,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    reviews: [
      {
        id: `1`,
        comment: `Good comment!`,
        rating: 8.9,
        user: `Ozzy Osbourne`,
        date: new Date(1583591483969),
      },
      {
        id: `3`,
        comment: `Bad comment!`,
        rating: 1.9,
        user: `Axl Rose`,
        date: new Date(1783591499969),
      },
    ],
  }
];

const match = {
  params: {
    id: `1`
  }
};

describe(`MoviePage component render correctly`, () => {
  it(`Should MoviePage component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <MoviePage movies={mock} match={match}/>
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
