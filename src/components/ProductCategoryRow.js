import React from 'react';

export default class ProductCategoryRow extends React.Component {

  render(){
    return(
      <h4>{this.props.category}</h4>
    );
  }
}
