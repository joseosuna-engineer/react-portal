/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Profile extends Component {
  componentWillMount() {
    this.props.requiredAuth(this.props);
 }
 constructor(props){
   super(props);
   props.getProfile(props.user);
 }

  render(){
    return(
      <div className="container">
        <div className="row">
            <h1> {this.props.user.firstName} {this.props.user.lastName} </h1>
        </div>
        <div className="row">
          <NavBar />
        </div>
      </div>
    );
  }
}
