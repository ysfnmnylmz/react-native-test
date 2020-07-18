import React from 'react';
import { Provider } from 'react-redux';
import store from './src/App/store';
import Main from './src/App/Pages/Main';
const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
};

export default App;
