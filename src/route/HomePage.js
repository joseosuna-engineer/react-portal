/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render(){
      return(
        <div>
          <h1>Welcome {this.props.user.email}!</h1>
          <Link to="/login">Logout</Link>
        </div>
      );
  }
}
