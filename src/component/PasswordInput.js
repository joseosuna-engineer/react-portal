/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class PasswordInput extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label,
      user:{
        password:''
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.props.setUserPassword(e.target.value);
  }

    render(){
      return(
        <div>
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
            placeholder={this.state.label}
            required
          />
        </div>
      );
    }
}
