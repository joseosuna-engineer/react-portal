/**
 *
 * Copyright 2017 Prottonne
 */

import { setUserEmail, setUserPassword } from '../action/user-action';
import { login } from '../action/auth-action';

 export const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 export const matchDispatchToProps = (dispatch) => {
   return   {
     setUserEmail: (email) => dispatch(setUserEmail(email)),
     setUserPassword: (password) => dispatch(setUserPassword(password)),
     login: (user) => dispatch(login(user))
   };
 }
