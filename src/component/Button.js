/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
  render(){
    return(
      <div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">{this.props.label}</button>
      </div>
    );
  }
}
