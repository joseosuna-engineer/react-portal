/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Header from '../component/Header';
import Picture from '../component/Picture';

export default class MyRentalROI extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getHeaderContent = this.getHeaderContent.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "rentalIncome":
        this.props.setRentalIncome(value);
        break;

      case "rentalAddress":
        this.props.setRentalAddress(value);
        break;

      case "rentalValue":
        this.props.setRetalValue(value);
        break;

      default:

    }

  }

  getHeaderContent(){
    return(
      <div>
          <Picture image="data:image/png;base64,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"
            borderStyleName="invest-pic-border"
            styleName="invest-pic"
          />
          <div className="header-summary-content">
            <form>
              <input
                type="text"
                style={{fontSize:'24px'}}
                onChange={this.onChange}
                placeholder="Arriendo"
                value={this.props.rental.income}
                name="rentalIncome" />
              <br />
              <input
                type="text"
                style={{fontSize:'14px',color:'#464a4c'}}
                onChange={this.onChange}
                placeholder="Dirección"
                value={this.props.rental.address}
                name="rentalAddress" />
              <br />
              <input
                type="text"
                style={{fontSize:'10px',color:'#464a4c'}}
                onChange={this.onChange}
                placeholder="Valor"
                value={this.props.rental.value}
                name="rentalValue" />
            </form>
          </div>
      </div>
    );
  }

  render(){
    return(
      <div>
        <Header history={this.props.history} content={this.getHeaderContent} />
        <div id="accordion" role="tablist" aria-multiselectable="true">
          <div role="tab" id="headingOne" style={{fontSize:'12px',textAlign:'center', marginTop:'8px'}}>
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span><b>Egresos Mensuales</b></span>
              </a>
          </div>
          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div className="invest-expenses-label">
              <label htmlFor="rentalTax">Impuestos</label>
              <label htmlFor="rentalInsurance">Seguros</label>
              <label htmlFor="rentalCommonExpenses">Gastos comunes</label>
              <label htmlFor="rentalVacancy">Publicidad</label>
              <label htmlFor="rentalRepairs">Reparaciones</label>
              <label htmlFor="rentalMaintenance">Mantenimiento</label>
              <label htmlFor="rentalMortgage">Hipoteca</label>
            </div>
            <div className="invest-expenses">
              <input
                type="text"
                onChange={this.onChange}

                value={this.props.rental.tax}
                name="rentalTax" />
                <input
                  type="text"
                  onChange={this.onChange}

                  value={this.props.rental.insurance}
                  name="rentalInsurance" />
                  <input
                    type="text"
                    onChange={this.onChange}

                    value={this.props.rental.commonexpenses}
                    name="rentalCommonExpenses" />
                    <input
                      type="text"
                      onChange={this.onChange}

                      value={this.props.rental.vacancy}
                      name="rentalVacancy" />
                      <input
                        type="text"
                        onChange={this.onChange}

                        value={this.props.rental.repairs}
                        name="rentalRepairs" />
                        <input
                          type="text"
                          onChange={this.onChange}

                          value={this.props.rental.maintenance}
                          name="rentalMaintenance" />
                          <input
                            type="text"
                            onChange={this.onChange}

                            value={this.props.rental.mortgage}
                            name="rentalMortgage" />
            </div>
            <div style={{marginTop:'8px',marginLeft:'16px'}} >
              <span>Total Egresos Mensuales: <strong>{this.props.rental.expenses}</strong></span>
            </div>
          </div>
          <div role="tab" id="headingTwo" style={{fontSize:'12px',textAlign:'center', marginTop:'8px'}}>
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span><b>Ganancias Mensuales</b></span>
              </a>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div>
            CONTENIDO 2
            </div>
          </div>
          <div role="tab" id="headingThree" style={{fontSize:'12px',textAlign:'center', marginTop:'8px'}}>
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <span><b>Retorno de Inversión</b></span>
              </a>
          </div>
          <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
            <div>
            CONTENIDO 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}
