import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise-middleware';
import reducers from './reducers';

const middleWares = [ReduxThunk, logger, ReduxPromise];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

export default store;
