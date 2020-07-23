import React from 'react';
import renderer from 'react-test-renderer';
import Input from './input';

const props = {
  type: `radio`,
  groupName: `rating`,
  id: `1`,
  name: `email`,
  placeholder: `Email`,
  value: `a@a.ru`,
  label: `Email`,
  touched: true,
  shouldValidate: true,
  onInputChange: () => {},
};

describe(`Input component render correctly`, () => {
  it(`Should Input component render correctly when its valid`, () => {
    const tree = renderer
      .create(
          <Input valid {...props}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Input component render correctly when its invalid`, () => {
    const tree = renderer
      .create(
          <Input valid={false} {...props}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
