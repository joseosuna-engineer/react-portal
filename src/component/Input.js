/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';

export default class Input extends Component {
   constructor(props){
     super(props);
     this.state={
       label:props.label,
       type:props.type,
       styleName:props.styleName
     };
     this.onChange = this.onChange.bind(this);
   }

   onChange(e){
     if(this.state.type==="email"){
        this.props.setUserEmail(e.target.value);
     }else if(this.state.type==="password"){
        this.props.setUserPassword(e.target.value);
     }
   }
     render(){
       return(
         <div>
           <input
             onChange={this.onChange}
             type={this.state.type}
             className={this.state.styleName}
             placeholder={this.state.label}
             required
           />
         </div>
       );
     }
 }
