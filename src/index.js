import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Article from './pages/Article';
import ConnectedLayout from './components/ConnectedLayout';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConnectedLayout>
        <Switch>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </ConnectedLayout>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
