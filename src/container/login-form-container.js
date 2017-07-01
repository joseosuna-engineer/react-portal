/**
 *
 * Copyright 2017 Prottonne
 */

import { login, goHome } from '../action/user-action';
import LoginForm from '../component/LoginForm';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     login: (state) => dispatch(login(state)),
     goHome: (state) => dispatch(goHome(state)),
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(LoginForm);
