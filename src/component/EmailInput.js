/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, matchDispatchToProps } from '../container/user-container';

 class EmailInput extends Component {
   constructor(props){
     super(props);
     this.state={
       label:props.label
     };
     this.onChange = this.onChange.bind(this);
   }

   onChange(e){
     this.props.setUserEmail(e.target.value);
   }
     render(){
       return(
         <div>
           <input
             onChange={this.onChange}
             type="email"
             name="email"
             className="form-control"
             placeholder={this.state.label}
             required
             autoFocus
           />
         </div>
       );
     }
 }

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);
