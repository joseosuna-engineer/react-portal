/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import EmailInput from '../container/email-input-container';
import PasswordInput from '../container/password-input-container';
import Button from './Button';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      styleName:props.styleName
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.props).then(
      () => {
        this.props.goHome(this.props);
      }
    );
  }

  render(){
    return(
      <div>
        <form
          className={this.state.styleName}
          onSubmit={this.onSubmit}
        >
          <EmailInput
            label="Correo electrónico"
            styleName="form-control"
            type="email"
          />
          <PasswordInput
            label="Contraseña"
            styleName="form-control"
            type="password"
          />
          <Button
            label="Iniciar sesión"
            styleName="btn btn-lg btn-primary btn-block"
            type="submit" />
        </form>
      </div>
    );
  }
}
