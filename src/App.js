import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store/configureStore';
/* eslint-disable */
import { Router, browserHistory, HashRouter  } from 'react-router';
import routes from './routes';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={HashRouter } />
      </Provider>
    );
  }
}

export default App;
