import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import {AuthStatus} from '../../const';
import {SignIn} from './sign-in';
import {FormField, User} from '../../interfaces';

const mockUser: User = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const emailMock: FormField = {
  value: ``,
  valid: false,
  touched: false,
  validation: {
    required: true,
    email: true,
  }
}

const passwordMock: FormField = {
  value: ``,
  valid: false,
  touched: false,
  validation: {
    required: true,
    minLength: 6,
  }
}

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    user: mockUser,
    loading: false,
    error: false,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  formControls: {
    email: emailMock,
    password: passwordMock,
  },
  isFormValid: true,
  onFormSubmit: () => {},
  onInputChange: () => {},
};

describe(`SignIn component render correctly`, () => {
  const history = createMemoryHistory();

  it(`Should SignIn component render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <SignIn
                {...props}
                error={false}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should SignIn component render correctly with loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <SignIn
                {...props}
                error={false}
                loading={true}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should SignIn component render correctly with error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <SignIn
                {...props}
                error={true}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});