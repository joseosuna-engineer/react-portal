/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../container/user-container';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render(){
    return(
      <div>
        <h1>Welcome {this.props.user.email}!</h1>
        <Link to="/">Logout</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomePage);
