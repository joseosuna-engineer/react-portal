import React from 'react';

export default class ProductRow extends React.Component{

  render(){
    return(
      <h6>{this.props.product.name}</h6>
    );
  }
}
