import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

const props = {
  genre: `drama`,
  director: `Wes Bos`,
  releaseYear: 2018,
  actors: [`Ozzy Osbourne`, `Emilia Clarke`],
  runTime: 185
};

describe(`MovieDetails component render correctly`, () => {
  it(`Should MovieDetails component render correctly`, () => {
    const tree = renderer
      .create(
          <MovieDetails
            {...props}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
