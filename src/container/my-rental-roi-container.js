/**
 *
 * Copyright 2017 Prottonne
 */

import MyRentalROI from '../route/MyRentalROI';
import {
  setRentalAddress, setRentalIncome, setRetalValue
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
     setRetalValue: (value) => dispatch(setRetalValue(value))
   };
 }

 export default connect(mapStateToProps, matchDispatchToProps )(MyRentalROI);
