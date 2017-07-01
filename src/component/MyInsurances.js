/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class MyInsurances extends Component {
  componentDidMount(){
    if(this.props.user.isAuth){
      this.props.getProfile(this.props);
    }
  }
  render(){
    return(
      <div>
            <h1>Mis Seguros contratados</h1>
            <h2>{this.props.user.firstName}</h2>
            <h3>Póliza: 5272445</h3>
            <h4>Plan: {this.props.user.lastName}</h4>
      </div>
    );
  }
}
