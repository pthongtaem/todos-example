import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import WebRoute from './config/WebRoute';
import client from './config/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WebRoute />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
