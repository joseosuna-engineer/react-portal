/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

class HeaderTitle extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
  render(){
    return(
      <div>
        <h1 className="login-header">{this.state.label}</h1>
      </div>
    );
  }
}

export default HeaderTitle;
