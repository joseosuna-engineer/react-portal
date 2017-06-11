/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, matchDispatchToProps } from '../container/user-container';

class PasswordInput extends Component {
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
    this.props.setUserPass(e.target.value);
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

export default connect(mapStateToProps, matchDispatchToProps)(PasswordInput);
