/**
 *
 * Copyright 2017 Prottonne
 */

import { login } from '../action/user-action';
import LoginForm from '../component/LoginForm';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     login: (user) => dispatch(login(user))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(LoginForm);
