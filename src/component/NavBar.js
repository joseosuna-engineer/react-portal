/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Logo from '../component/Logo';
import HamburgerIcon from '../component/HamburgerIcon';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

  render(){
    return(
      <div>
      <nav className="navbar navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon-local">
            <HamburgerIcon />
          </span>
        </button>
        <a className="navbar-brand" href="#">
          <div className="d-inline-block align-top logo-nav">
            <Logo />
          </div>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Mis Seguros</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/settings">Configuración</Link>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}
