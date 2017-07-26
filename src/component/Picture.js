/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class Picture extends Component {
  constructor(props){
    super(props);
    this.state={
      image:props.image,
      borderStyleName:props.borderStyleName,
      styleName:props.styleName
    }
  }
  render(){
    const divStyle = {
      backgroundImage: 'url(' + this.props.image + ')',
    };
    return(
      <div className={this.state.borderStyleName}>
        <div className={this.state.styleName} style={divStyle} >
        </div>
      </div>
    );
  }
}
