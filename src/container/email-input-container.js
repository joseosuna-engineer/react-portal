/**
 *
 * Copyright 2017 Prottonne
 */

import { setUserEmail } from '../action/user-action';
import EmailInput from '../component/EmailInput';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     setUserEmail: (email) => dispatch(setUserEmail(email))
   };
 }

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);
