/**
 *
 * Copyright 2017 Prottonne
 */

import { logout } from '../action/user-action';
import NavBar from '../component/NavBar';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    user:store.user
  };
}

 const matchDispatchToProps = (dispatch) => {
   return   {
     logout: (history) => dispatch(logout(history))
   };
 }

 export default connect( mapStateToProps, matchDispatchToProps )(NavBar);
