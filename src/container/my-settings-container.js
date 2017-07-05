/**
 *
 * Copyright 2017 Prottonne
 */

import { getProfile } from '../action/user-action';
import MySettings from '../route/MySettings';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     getProfile: (state) => dispatch(getProfile(state))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(MySettings);
