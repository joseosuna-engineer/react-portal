/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
   this.props.requiredAuth(this.props);
 }

 logout(e){
   e.preventDefault();
   this.props.logout();
   this.props.history.push('/login');
 }
  render(){
      return(
        <div>
          <h1>Welcome {this.props.user.email}!</h1>
          <Link to="/login" onClick={this.logout}>Cerrar Sesión</Link>
        </div>
      );
  }
}
