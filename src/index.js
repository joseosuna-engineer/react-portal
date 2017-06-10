import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
global.jQuery = require('jquery');
global.Tether = require('tether');
global.Bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('./style/signin.css');
import { hashHistory, Route, HashRouter } from 'react-router-dom';

class Logo extends Component {
  render(){
    return(
      <div>
        <svg className="login-logo-svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400.000000 400.000000"
         preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M205 3968 c-81 -29 -149 -97 -177 -176 -10 -30 -13 -377 -13 -1797
        l0 -1760 21 -46 c31 -66 86 -123 147 -150 l52 -24 1770 0 1770 0 46 23 c61 30
        116 86 143 142 l21 45 3 1755 c2 1531 0 1761 -13 1805 -19 66 -79 135 -147
        169 l-52 26 -1770 -1 c-1239 0 -1780 -4 -1801 -11z m2399 -587 c197 -44 312
        -102 423 -212 151 -150 197 -342 197 -824 1 -342 -22 -506 -89 -653 -74 -161
        -233 -287 -440 -347 -153 -44 -298 -55 -732 -55 l-393 0 0 -344 0 -345 -22 -3
        c-13 -2 -170 -2 -350 0 l-328 3 0 1405 0 1405 818 -4 c804 -3 819 -4 916 -26z
        m1004 -2742 c105 -51 136 -198 59 -286 -60 -69 -145 -89 -222 -54 -69 31 -115
        105 -115 181 1 36 33 101 67 133 54 50 139 61 211 26z"/>
        <path d="M1570 2349 l0 -490 378 4 c252 2 389 7 413 15 143 47 176 157 166
        546 -6 234 -18 289 -76 347 -65 65 -94 69 -513 69 l-368 0 0 -491z"/>
        <path d="M3439 597 c-96 -64 -87 -212 15 -261 101 -48 216 23 216 133 0 120
        -133 194 -231 128z m145 -43 c24 -23 19 -60 -10 -83 -15 -12 -22 -21 -17 -21
        5 0 19 -18 32 -40 l22 -40 -30 0 c-23 0 -34 7 -45 28 -8 16 -22 34 -30 41 -14
        12 -16 9 -16 -28 0 -37 -2 -41 -25 -41 l-25 0 0 100 0 100 64 0 c45 0 69 -5
        80 -16z"/>
        <path d="M3490 515 c0 -20 5 -25 24 -25 31 0 41 26 16 40 -30 16 -40 12 -40
        -15z"/>
        </g>
        </svg>
      </div>
    );
  }
}

class Button extends Component {
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

class PassInput extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label,
      user:{
        password:''
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.props.setUserPass(e.target.value);
  }

    render(){
      return(
        <div>
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
            placeholder={this.state.label}
            required
          />
        </div>
      );
    }
}

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


class HeaderTitle extends Component {
  constructor(props){
    super(props);
    this.state={
      label:props.label
    };
  }
  render(){
    return(
      <div>
        <h1 className="login-header">{this.state.label}</h1>
      </div>
    );
  }
}



class LoginForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if(this.props.user.email==='user@email.net' &&
      this.props.user.pass==='123'){
        this.props.history.push('/home');
    }else{
      console.log("reject");
    }
  }

  render(){
    return(
      <div>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <EmailInput2 label="Correo electrónico" />
          <PassInput2 label="Contraseña" />
          <Button label="Iniciar sesión" />
        </form>
      </div>
    );
  }
}

class LoginPage extends Component {
  render(){
    return(
      <div className="container">
        <Logo />
        <HeaderTitle label="Inicia sesión en Prottonne"/>
        <LoginForm2 history={this.props.history} />
      </div>
    );
  }
}

const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      state = {...state, email: action.payload}
      break;

      case 'SET_USER_PASS':
        state = {...state, pass: action.payload}
        break;

        default:
        state = {...state}
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer
});

const store = createStore(reducers);

const setUserEmail = (email) => {
  return {
    type: 'SET_USER_EMAIL',
    payload: email
  }
}

const setUserPass = (pass) => {
  return {
    type: 'SET_USER_PASS',
    payload: pass
  }
}

const mapStateToProps = (store) => {
  return {
    user:store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return   {
    setUserEmail: (email) => dispatch(setUserEmail(email)),
    setUserPass: (pass) => dispatch(setUserPass(pass))
  };
}

class HomePage extends Component {
  render(){
    return(
      <div><h1>Welcome {this.props.user.email}!</h1></div>
    );
  }
}

let EmailInput2 = connect(mapStateToProps, matchDispatchToProps)(EmailInput);
let PassInput2 = connect(mapStateToProps, matchDispatchToProps)(PassInput);
let LoginForm2 = connect(mapStateToProps, matchDispatchToProps)(LoginForm);
let HomePage2 = connect(mapStateToProps, matchDispatchToProps)(HomePage);




const app = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={hashHistory}>
      <div>
        <Route exact={true} path='/' component={LoginPage}/>
        <Route exact={true} path='/home' component={HomePage2}/>
      </div>
    </HashRouter>
  </Provider>
  ,
  app
);
