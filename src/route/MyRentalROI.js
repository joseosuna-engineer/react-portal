/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Header from '../component/Header';

export default class MyRentalROI extends Component {
  render(){
    const HeaderContent = () => {
      return(
        <div>
        hola
        </div>
      );
    }
    return(
      <div>
        <Header history={this.props.history} content={HeaderContent} />
        ROI-contenido
      </div>
    );
  }
}
