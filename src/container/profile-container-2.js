/**
 *
 * Copyright 2017 Prottonne
 */

import { getProfile } from '../action/user-action';
import Profile from '../component/MySettings';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     getProfile: (user) => dispatch(getProfile(user))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(Profile);
