import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk'

import App from './components/app';
import RootReducer from './reducers/root-reducer';
import {BrowserRouter} from "react-router-dom";
import './style/index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(RootReducer)}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.querySelector('.content')
);
