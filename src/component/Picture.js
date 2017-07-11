/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class Picture extends Component {
  constructor(props){
    super(props);
    this.state={
      image:props.image
    }
  }
  render(){
    const divStyle = {
      backgroundImage: 'url(' + this.props.image + ')',
    };
    return(
      <div className="user-pic-border">
        <div className="user-pic" style={divStyle} >
        </div>
      </div>
    );
  }
}
