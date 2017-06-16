/**
 *
 * Copyright 2017 Prottonne
 */

 import HomePage from '../route/HomePage';
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

 export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
