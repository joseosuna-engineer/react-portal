/**
 *
 * Copyright 2017 Prottonne
 */

import { login } from '../action/auth-action';

 export const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 export const matchDispatchToProps = (dispatch) => {
   return   {
     login: (user) => dispatch(login(user))
   };
 }
