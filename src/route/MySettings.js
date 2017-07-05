/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Picture from '../component/Picture';

export default class MySettings extends Component {
  render(){
    return(
      <div>
            <Picture />
            <div className="user-name">
              <span>{this.props.user.firstName} {this.props.user.lastName}</span>
            </div>

      </div>
    );
  }
}
