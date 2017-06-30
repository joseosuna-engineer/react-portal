/**
 *
 * Copyright 2017 Prottonne
 */

import { requiredAuth, getProfile } from '../action/user-action';
import Profile from '../component/Profile';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     requiredAuth: (state) => dispatch(requiredAuth(state)),
     getProfile: (user) => dispatch(getProfile(user))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(Profile);
