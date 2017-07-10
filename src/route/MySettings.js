/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Picture from '../component/Picture';

export default class MySettings extends Component {
  componentDidMount(){
    if(this.props.user.auth){
      this.props.getUserImage(this.props);
    }
  }
  render(){
    return(
      <div>
            <Picture image={this.props.user.image} />
            <div className="user-name">
              <span>{this.props.user.firstName} {this.props.user.lastName}</span>
            </div>
            <div className="user-email">
              <span className="">{this.props.user.email}</span>
            </div>
      </div>
    );
  }
}
