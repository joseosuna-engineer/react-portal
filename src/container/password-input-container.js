/**
 *
 * Copyright 2017 Prottonne
 */

 import { setUserPassword } from '../action/user-action';

  export const mapStateToProps = (store) => {
    return {
      user:store.user
    };
  }

  export const matchDispatchToProps = (dispatch) => {
    return   {
      setUserPassword: (password) => dispatch(setUserPassword(password))
    };
  }
