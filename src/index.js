import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Route, HashRouter } from 'react-router-dom';

import Home from './routes/Home';
import Store from './routes/Store';
import Login from './routes/Login';

const app = document.getElementById('root');

ReactDOM.render(
  <HashRouter history={hashHistory}>
    <div>
      <Route exact={true} path='/home' component={Home}/>
      <Route exact={true} path='/store' component={Store}/>
      <Route exact={true} path='/' component={Login}/>
    </div>
  </HashRouter>
  ,
  app
);
