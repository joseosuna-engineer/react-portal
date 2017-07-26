/**
 *
 * Copyright 2017 Prottonne
 */

import MyRentalROI from '../route/MyRentalROI';
import {
  setRentalAddress, setRentalIncome, setRetalSettings
} from '../action/rental-action';
import { connect } from 'react-redux';

 const mapStateToProps = (store) => {
   return {
     rental:store.rental
   };
 }

 const matchDispatchToProps = (dispatch) => {
   return   {
     setRentalAddress: (address) => dispatch(setRentalAddress(address)),
     setRentalIncome: (income) => dispatch(setRentalIncome(income)),
     setRetalSettings: (settings) => dispatch(setRetalSettings(settings))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(MyRentalROI);
