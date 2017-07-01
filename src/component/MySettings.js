/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class MySettings extends Component {
  componentDidMount(){
    if(this.props.user.isAuth){
      this.props.getProfile(this.props);
    }
  }
  render(){
    return(
      <div>
            <h1>Configuración</h1>
            <h2>Perfil</h2>
            <h3>Nombre: {this.props.user.firstName}</h3>
            <h3>Apellido: {this.props.user.lastName}</h3>
      </div>
    );
  }
}
