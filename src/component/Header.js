/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import {
  RENTAL_NAV_PATH, SEARCH_NAV_PATH, INVESTMENT_NAV_PATH,
  SETTINGS_NAV_PATH
} from '../action/action-const';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      label:'',
      activeTabClassName:''
    };
    this.setLabel = this.setLabel.bind(this);
  }
  componentWillReceiveProps() {
    this.setLabel();
  }
  componentDidMount() {
    this.setLabel();
  }
  setLabel(){
    let headerTitle;
    let iconClass;
    switch (this.props.history.location.pathname) {
      case RENTAL_NAV_PATH:
        headerTitle =  "Retorno de Inversión";
        iconClass = "rental-icon active";
        break;
      case SEARCH_NAV_PATH:
        headerTitle = "Buscar";
        iconClass = "search-icon active";
        break;
      case INVESTMENT_NAV_PATH:
        headerTitle = "Inversiones";
        iconClass = "invest-icon active";
        break;
      case SETTINGS_NAV_PATH:
        headerTitle = "Configuración";
        iconClass = "settings-icon active";
        break;
      default:
        headerTitle = "";
        iconClass = "";
      }

      this.setState({label:headerTitle,activeTabClassName:iconClass});

  }
  render(){
    let hearderIndicator;
    if(SEARCH_NAV_PATH===this.props.history.location.pathname){
      hearderIndicator = (
        <form className="header-search-form">
          <input type="text"  maxLength="24" size="24" placeholder={`${this.state.label}`} />
        </form>
      )
    }else{
      hearderIndicator = (
        <div className="hearder-inicator-label">
          <span>{`${this.state.label}`}</span>
        </div>
      )
    }

    return(
      <div>
        <div className="header-indicator">
          <div className={this.state.activeTabClassName}></div>
            { hearderIndicator }
        </div>
        <div className="header-summary">
        </div>
      </div>
    );
  }
}
