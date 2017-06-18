/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import NavBar from '../component/NavBar';

export default class HomePage extends Component {
  componentWillMount() {
   this.props.requiredAuth(this.props);
 }

  render(){
      return(
        <div className="container">
          <NavBar />
        </div>
      );
  }
}
