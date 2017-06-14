/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../container/home-page-container';
import { Link } from 'react-router-dom';

class HomePage extends Component {
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
          <Link to="/">Logout</Link>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(HomePage);
