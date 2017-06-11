/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Button from './Button';
import { connect } from 'react-redux';
import { mapStateToProps } from '../container/user-container';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if(this.props.user.email==='user@email.net' &&
      this.props.user.pass==='123'){
        this.props.history.push('/home');
    }else{
      console.log("reject");
    }
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

export default connect(mapStateToProps)(LoginForm);
