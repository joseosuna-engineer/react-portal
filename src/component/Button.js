/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label,
      type:props.type,
      styleName:props.styleName
    };
  }
  render(){
    return(
      <div>
        <button
          type={this.state.type}
          className={this.state.styleName}
        >
          {this.state.label}
        </button>
      </div>
    );
  }
}
