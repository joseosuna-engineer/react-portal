/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class HeaderTitle extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label,
      styleName:props.styleName
    };
  }
  render(){
    return(
      <div>
        <h1
          className={this.state.styleName}
        >
          {this.state.label}
        </h1>
      </div>
    );
  }
}
