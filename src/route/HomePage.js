/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render(){

    if(this.props.user.isAuth){
      return(
        <div>
          <h1>Welcome {this.props.user.email}!</h1>
          <h4>You are authenticated: yes!</h4>
          <Link to="/">Logout</Link>
        </div>
      );
    }else{
      return(
        <div>
          <h1>Welcome {this.props.user.email}!</h1>
          <h4>You are authenticated: no!</h4>
          <Link to="/login">Logout</Link>
        </div>
      );
    }
  }
}
