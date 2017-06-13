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
import axios from 'axios';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    axios.post('https://reqres.in/api/login', this.props.user).then(
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

export default connect(mapStateToProps)(LoginForm);
