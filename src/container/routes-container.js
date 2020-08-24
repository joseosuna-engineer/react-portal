/**
 *
 * Copyright 2017 Prottonne
 */

 import Routes from '../route/Routes';
 import { connect } from 'react-redux';
 import { requiredAuth } from '../action/user-action';

 export const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     requiredAuth: (state) => dispatch(requiredAuth(state))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps)(Routes);
