/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import  Logo  from '../component/Logo';
import  HeaderTitle  from '../component/HeaderTitle';
import  LoginForm  from '../component/LoginForm';

class LoginPage extends Component {
  render(){
    return(
      <div className="container">
        <Logo />
        <HeaderTitle label="Inicia sesión en Prottonne"/>
        <LoginForm history={this.props.history} />
      </div>
    );
  }
}

export default LoginPage;
