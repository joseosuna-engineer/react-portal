/**
 *
 * Copyright 2017 Prottonne
 */

 export const mapStateToProps = (store) => {
   return {
     user:store.user,
     auth:store.auth
   };
 }
