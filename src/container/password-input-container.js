/**
 *
 * Copyright 2017 Prottonne
 */

 import { setUserPassword } from '../action/user-action';
 import PasswordInput from '../component/PasswordInput';
 import { connect } from 'react-redux';

  const mapStateToProps = (store) => {
    return {
      user:store.user
    };
  }

  const matchDispatchToProps = (dispatch) => {
    return   {
      setUserPassword: (password) => dispatch(setUserPassword(password))
    };
  }

export default connect(mapStateToProps, matchDispatchToProps)(PasswordInput);
