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

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.props.user).then(
      (res) => this.props.history.push('/home'),
      (err) => console.log(err)
    );
  }

  render(){
    return(
      <div>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <EmailInput label="Correo electrónico" />
          <PasswordInput label="Contraseña" />
          <Button label="Iniciar sesión" />
        </form>
      </div>
    );
  }
}
