import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WebRoute from './config/WebRoute';

const App = () => {
  return (
    <Provider store={store}>
      <WebRoute />
    </Provider>
  );
};

export default App;
