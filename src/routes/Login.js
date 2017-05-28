import React from 'react';


export default class Login extends React.Component {
constructor(props){
  super(props);
  this.state = {
    user : "",
    pass : "",
    error: ""
  }
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
}

onSubmit(e){
  e.preventDefault(e);
 if(this.state.user==="user" && this.state.pass==="user"){
    this.props.history.push('/home');
  }else{
     this.setState( { error : "invalid!!!" });
  }
}

onChange(e){
 this.setState( {[e.target.name]:e.target.value });
}

  render(){
    return(
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <span >{this.state.error}</span> <br />
          <span>User:</span><input type="text" name="user" value={this.state.user} onChange={this.onChange} /><br />
          <span>Pass:</span><input type="password" name="pass" value={this.state.pass} onChange={this.onChange} /><br />
          <button type="submit">Login</button>
        </form>
    );
  }
}
