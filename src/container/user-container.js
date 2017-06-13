/**
 *
 * Copyright 2017 Prottonne
 */

import { setUserEmail, setUserPassword } from '../action/user-action';

 export const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 export const matchDispatchToProps = (dispatch) => {
   return   {
     setUserEmail: (email) => dispatch(setUserEmail(email)),
     setUserPassword: (password) => dispatch(setUserPassword(password))
   };
 }
