/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
import Logo from '../component/Logo';
import HamburgerIcon from '../component/HamburgerIcon';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.props.logout(this.props.history);
  }
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
              <li>
                <a href="#">
                  <img width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADAUlEQVRoQ+2aj5ENQRCHfxeBkwEROBEgAkTARYAIEAEiQARHBIjAiQARIALqU91V8/Z233TP7LJv66bq1d27N7PT3/Sf6e53R9rIONoIhy5BTJPHkm5JuifpmiTen9hn55J+Svom6Z2kT/Z+ESNo1QjCPjWAjGAAPZcE5KwjC8KpA/CwkIKTRkDXgAsJrGuI+TeKNW8MCG3NMjIgmM9rE+6XpJf2wnwiA6jH9rpiZnZf0sfI4tqcKMgjE5rnvTdhWk8TrXIId0044F7VBK19HgFhoxf2oCcFUO3Ztc9nfW4NBHM6M4lOJWHbcw58B3Nl3Okxs30gmMBn84k5NTE8CNcMvnbTwnX6sPaBcPoPzCfQzJKDqIfPvB1ExPCeUyCETrRBdOL3VseOCoL2v9pktJK+Z6ZA/IS4vJ5Fpemcxz7cUUTFtAWMgRDvf5hQV5dMKwbg5b61IHThzMYWeKTixr7decrZ5ZgUGQAXJVYRHmMg7uRLRqopAT2CpZ1+DISUgYy2K66Hj3J3IhbwwTLllDWMgRCtiFRN0aMRwJd5tMTE2D88xkB+2+q0w4V33T+xaf9Ng3jk+J+m9aWoNEOK3rSzbyb8+oWYjhwhG9g/ySPmLBfiGlKUdGq0xqQxfauj5Foa31XsJEytTOOvt5QNkcKK5A2bXXJQTuObzYlqrdTF4WndLJlAeh1CEYdmou2lnYOtpSGexLFo6eZDOlKVJDUQ5pZtm1l6UCYA1WBZfXYdVARkCIPPYGqtdTzmQ59srJxthomCAIOZAeHtTrqFdAijNs39RMfStYBP8KzhaILJgLAhp4kgtIl8EBBIa/iJcGUTG0GpMWjE+dcNrKPBwN+8n9wNkwXxDREKIO/fRkMzlx3QZeO67DaWz0lpphWk3JBTLb/o8a8PvpsfoSEE5zVlht0wc4BEtVGb1wWzJhBAm2HWBtIMs0aQJpi1gqRh1gySglk7SBjmEECmYHYqyUMBGcJcKIcPCcRhSF7Lf1j4e9EeGshkdnAJUkuc/vXnfwCQVbEz/+Ph+QAAAABJRU5ErkJggg==" />
                </a>
              </li>
                <li>
                  <a href="#">
                    <img width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADaElEQVRoQ+2a7ZHTQAyGlQqACuAqACrgqACoAKgAqACoAKgAqACo4I4KgAqACoAKYB6PXo9iHHu1ieP8WM14EueslV59rVa+jS1PX1zE7SVFbZZc3Nf+65+Lylp08QakIkwO6ZFbZnbHzPi8YWZX/XtU66uZ/TazH2bG98/+WaH6Nsu+QO6Z2X2/ULyGAPbRr081C8BTAwSFn5jZI7e8ZP80s0u/sDgkD/A9egiPnft1PSgP3zsze+OeK8aVBfLQzF67UghBee6xqJQvFu4PAgqvPjUzgcJL3L8vXawUCMLeugVZm9gWgFJZJc8JELkG4eHHJUYqAUIIfHAv/PGQwgNLEmGLoa54iD1wUDtlzgFhQTwBkYjc4/ZjEDlFvlBQIDzD/ShNAYkgiFXu1yCUJzcnwewCQjhdOPOaIGS4CIaejWq4RWNASGwaPVxLGaR6nAIJDKF9NgzxMSAkNtXj28jOvDYgPHHTyz0FoKchEAAAhOpEeP3nwpWR0P7oWHA3VrIhkO++W780sxcrK71LPHo9dyP3Z5wIRN5ggWtHLLNZe5G7v5yJ8Or2tAiEH6jZp1Cl5sAp8XtdBSSipCLU9k1zChzq7zFXOgwCEpO8th0/lJKl61CGaWG68BIQJRBtCKAAw25K5dJBCQE0cXiLMJw6O+iconZ9X16qJ1eUq1ToCpOAoCAdJz8yLGATnPMMCz8bNHMAf1Ww/+zDiyGRi4GpXnTi5wKisou7BIBEGh6U5KF4dlAzF3sznVPgj+Mg+Et5AQs/hNJDXv7GbwA7ExCNbGBiR0epuc0QhbA+RBVRU4m1aMFFY+OgUt6xfIGXVCA/RJshELzAg6WtemwuWXSsods11xrybu3UMxmPhzAe7UpXtGKOEFIsXgpCshRSu84LUwO6Od4pPOjbh97cwaq0FE491yaNGSs2jySs1UIrYayqSWNmfZ5tHslYrCV7wlottBLGasmeMVYLrYy1WtVKWOtkQyv7nwwnCySrWPb5hLPDWbeCSxPxkqOpjrOLT/Zrkl0zMOZKW6P9EaPwsggwiw/Fa4BwVmYEwxRj6r2ezuO8omBQl50FpIKlBggC4uQezzD+YVAGMehjEsMzUD8xT2mWfLgWiMAwkonzpSj+WK+yO5n7AIGfMJP1NWMiseWlRcMpWu0ftXfRM+Zi+WkAAAAASUVORK5CYII=" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABg0lEQVRoQ+2Z4VHDMAyFv04AGxQmADbpCGzACMAEMAIbQScoTAAbwOkuuStpk0P2c2V8zs9cKuvTk+y8dEUj16oRDnJAnoANcDEU4x14AR4jipMK8gzczSRsIA+nhkkF+QTOgRvgbUj6GngFTJnL/wLyPSQ6LcTc/eJcqYpUDWJtYe3huZYUGWE98bzPWltbe//atezmlTNSNMh2LH6TreURo+oZ8YB8AWcz2+/H3iHpiZn1bGpr2YF338KBaAwGcwusByBTwl5RTn6qT3etLGmjf5zaWtF5H6zfQWqTpCsiVERi0KIVkRm0aBCZQYsGkb2zNQmSYqxUM5/qa2TGKhok21ipAPqMTCsZPewygxYNIjNo0SAyg1YDiGTj6CCSMgqDdEWExZSE8ioiMUGSzCdBPCAyExQNIjNB0SCyF7wOslCB/RnZ/fEreqoJKiHEUWNl/8aOH6SXFq0JJMlY9Rkp0VM5xkpmgkqAeQ5EmQmKBpGZoBpASuQgielpLcmCpYL8ACjUZjO0jeaUAAAAAElFTkSuQmCC" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABNklEQVRoQ+3a2w3CMAxA0dsN2ASYABiBSRkBNgA2YQOQK8pDSptUMcSWnF8qN8dxYrW0A87AijbjAqw1bt0Bd41AFTFkDtXjE6IScMaMhgSq3DcgMzI/dmmsSCozUVpRWu8MxB6JPaKwH34eouWppYoLiGo6FYJZXpEDsAD2wC1ntQw5ARtAnll2OYxliKyGYJYlGMsQqaZijHVIMcYDpAjjBZLFeIJMYrxBRjG1kJbvxIYe2feZWogEkXO+5bgC21pIC4D0luPz7WiPkK7vDZJESDY9QUYRniCTCC+QLMIDpAhhHVKMsA4Zmu3riJ066y2fWtJsZfR9ItewLENyc//6PSCz0vWHi2NFFJIcfyukktiytGJFYkUUNnYqRJRWlJa30vrRfLNh1b4OavluSp41VD56ewAu3H5TFGwgqQAAAABJRU5ErkJggg==" />
                  </a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
/*  render(){
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
              <Link className="nav-link" to="/">Mis seguros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Configuración</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={this.onClick} to="/logout">Cerrar sesión</Link>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }*/
}
