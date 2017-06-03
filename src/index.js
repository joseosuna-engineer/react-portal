import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
  render(){
    return(
      <div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">{this.props.label}</button>
      </div>
    );
  }
}

class PassInput extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
    render(){
      return(
        <div>
          <input type="password" className="form-control" placeholder={this.state.label} required />
        </div>
      );
    }
}

class EmailInput extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
    render(){
      return(
        <div>
          <input type="email" className="form-control" placeholder={this.state.label} required autoFocus />
        </div>
      );
    }
}


class HeaderTitle extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
  render(){
    return(
      <div>
        <h2 className="form-signin-heading">{this.state.label}</h2>
      </div>
    );
  }
}


class LoginForm extends React.Component {
  render(){
    return(
      <div className="container">
        <form className="form-signin">
          <HeaderTitle label="Inicia sesión"/>
          <EmailInput label="Correo electrónico" />
          <PassInput label="Contraseña" />
          <Button label="Iniciar sesión" />
        </form>
      </div>
    );
  }
}

class LoginPage extends React.Component {
  render(){
    return(
      <div>
        <LoginForm />
      </div>
    );
  }
}

const app = document.getElementById('root');

ReactDOM.render(
  <LoginPage />
  ,
  app
);
