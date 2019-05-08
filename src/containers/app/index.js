import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import User from '../user';

const App = () => <User />;

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
