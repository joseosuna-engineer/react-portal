/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../container/user-container';

class HomePage extends Component {
  render(){
    return(
      <div><h1>Welcome {this.props.user.email}!</h1></div>
    );
  }
}

export default connect(mapStateToProps)(HomePage);
