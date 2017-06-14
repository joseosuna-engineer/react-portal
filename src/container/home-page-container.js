/**
 *
 * Copyright 2017 Prottonne
 */

 import HomePage from '../route/HomePage';
 import { connect } from 'react-redux';

 export const mapStateToProps = (store) => {
   return {
     user:store.user
   };
 }

 export default connect(mapStateToProps)(HomePage);
