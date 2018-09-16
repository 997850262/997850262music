<<<<<<< HEAD
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store/configureStore';
/* eslint-disable */
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    );
  }
}

export default App;
=======
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store/configureStore';
/* eslint-disable */
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    );
  }
}

export default App;
>>>>>>> 0c6edde90f520a769c2599bb8280a3155721c8fd
