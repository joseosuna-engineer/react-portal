/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Button from './Button';
import { connect } from 'react-redux';
import { mapStateToProps, matchDispatchToProps } from '../container/login-form-container';

class LoginForm extends Component {
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

export default connect(mapStateToProps, matchDispatchToProps )(LoginForm);
