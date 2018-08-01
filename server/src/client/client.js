import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import reducers from './ducks';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
   <Provider store={store}>
      <BrowserRouter>
         <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
   </Provider>
   , document.getElementById('root'));
