/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import  Logo  from '../component/Logo';
import  HeaderTitle  from '../component/HeaderTitle';
import  LoginForm  from '../container/login-form-container';

class LoginPage extends Component {
  render(){
    return(
      <div className="container">
        <div className="login-logo-svg" >
          <Logo />
        </div>
        <HeaderTitle label="Inicia sesión en Prottonne"/>
        <LoginForm history={this.props.history} />
      </div>
    );
  }
}

export default LoginPage;
