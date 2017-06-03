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
      <button type="submit">{this.props.label}</button>
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
        <input type="password" placeholder={this.state.label} />
      );
    }
}

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
    render(){
      return(
        <input type="text" placeholder={this.state.label} />
      );
    }
}

class LoginForm extends React.Component {
  render(){
    return(
      <div>
        <form>
          <TextInput label="Correo electrónico" />
          <PassInput label="Contraseña" />
          <Button label="Iniciar sesión" />
        </form>
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
      <div><span>{this.state.label}</span></div>
    );
  }
}

class LoginPage extends React.Component {
  render(){
    return(
      <div>
        <HeaderTitle label="Inicia sesión en Prottonne"/>
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
