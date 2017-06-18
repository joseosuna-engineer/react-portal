/**
 *
 * Copyright 2017 Prottonne
 */

 import axios from 'axios';

 const user = {
   id:"SDDS4"
 }
 axios.post('/lab/profile',user)
  .then(
    (res) => {
      console.log(res);
    }
  );


  <div>
    <h1>Welcome {this.props.user.email}!</h1>
    <Link to="/login" onClick={this.logout}>Cerrar Sesión</Link>
    </div>

    logout(e){
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/login');
    }


import { Link } from 'react-router-dom';

this.logout = this.logout.bind(this);
