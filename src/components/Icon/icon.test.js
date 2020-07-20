import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './icon.jsx';

const props = {
  width: `20`,
  height: `19`,
  name: `play-s`,
};

describe(`Icon component render correctly`, () => {
  it(`Should Icon component render correctly`, () => {
    const tree = renderer
      .create(
          <Icon {...props}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
