/**
 *
 * Copyright 2017 Prottonne
 */

export default function userReducer(state={}, action) {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      state = {...state, email: action.payload}
      break;

      case 'SET_USER_PASS':
        state = {...state, pass: action.payload}
        break;

        default:
        state = {...state}
  }
  return state;
}