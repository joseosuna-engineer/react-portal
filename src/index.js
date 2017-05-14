import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Route, HashRouter } from 'react-router-dom';

import Home from './routes/Home';
import Store from './routes/Store';

const app = document.getElementById('root');

ReactDOM.render(
  <HashRouter history={hashHistory}>
    <div>
      <Route exact={true} path='/' component={Home}/>
      <Route exact={true} path='/store' component={Store}/>
    </div>
  </HashRouter>
  ,
  app
);
