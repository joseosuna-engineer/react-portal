import React from 'react';

export default class SearchBar extends React.Component {

  render(){
    return(
      <div>
        <input onChange={this.props.onChange} type="text" />
        <input type="checkbox" />
      </div>
    );
  }
}
