/**
 *
 * Copyright 2017 Prottonne
 */

import React, { Component } from 'react';
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
      <div className="fixed-bottom small-icon">
        <nav className="navbar navbar-light bg-faded">
          <div className="row">
            <div className="col">
              <Link to="/">
                <img alt="Mis seguros" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADaElEQVRoQ+2a7ZHTQAyGlQqACuAqACrgqACoAKgAqACoAKgAqACo4I4KgAqACoAKYB6PXo9iHHu1ieP8WM14EueslV59rVa+jS1PX1zE7SVFbZZc3Nf+65+Lylp08QakIkwO6ZFbZnbHzPi8YWZX/XtU66uZ/TazH2bG98/+WaH6Nsu+QO6Z2X2/ULyGAPbRr081C8BTAwSFn5jZI7e8ZP80s0u/sDgkD/A9egiPnft1PSgP3zsze+OeK8aVBfLQzF67UghBee6xqJQvFu4PAgqvPjUzgcJL3L8vXawUCMLeugVZm9gWgFJZJc8JELkG4eHHJUYqAUIIfHAv/PGQwgNLEmGLoa54iD1wUDtlzgFhQTwBkYjc4/ZjEDlFvlBQIDzD/ShNAYkgiFXu1yCUJzcnwewCQjhdOPOaIGS4CIaejWq4RWNASGwaPVxLGaR6nAIJDKF9NgzxMSAkNtXj28jOvDYgPHHTyz0FoKchEAAAhOpEeP3nwpWR0P7oWHA3VrIhkO++W780sxcrK71LPHo9dyP3Z5wIRN5ggWtHLLNZe5G7v5yJ8Or2tAiEH6jZp1Cl5sAp8XtdBSSipCLU9k1zChzq7zFXOgwCEpO8th0/lJKl61CGaWG68BIQJRBtCKAAw25K5dJBCQE0cXiLMJw6O+iconZ9X16qJ1eUq1ToCpOAoCAdJz8yLGATnPMMCz8bNHMAf1Ww/+zDiyGRi4GpXnTi5wKisou7BIBEGh6U5KF4dlAzF3sznVPgj+Mg+Et5AQs/hNJDXv7GbwA7ExCNbGBiR0epuc0QhbA+RBVRU4m1aMFFY+OgUt6xfIGXVCA/RJshELzAg6WtemwuWXSsods11xrybu3UMxmPhzAe7UpXtGKOEFIsXgpCshRSu84LUwO6Od4pPOjbh97cwaq0FE491yaNGSs2jySs1UIrYayqSWNmfZ5tHslYrCV7wlottBLGasmeMVYLrYy1WtVKWOtkQyv7nwwnCySrWPb5hLPDWbeCSxPxkqOpjrOLT/Zrkl0zMOZKW6P9EaPwsggwiw/Fa4BwVmYEwxRj6r2ezuO8omBQl50FpIKlBggC4uQezzD+YVAGMehjEsMzUD8xT2mWfLgWiMAwkonzpSj+WK+yO5n7AIGfMJP1NWMiseWlRcMpWu0ftXfRM+Zi+WkAAAAASUVORK5CYII=" />
              </Link>
            </div>
            <div className="col">
              <Link to="/claim">
                <img alt="Siniestro"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAzklEQVRoQ+2aQQqAMAwE9f+P1ouCYimNzGKR8Wa1m2bHpCKuy/PYGmMzDq3XRd1Ojgu/S6SV5AxkTqOHiZhIGJtEwgaX5SVStiw8QSJhg8vyKJH07t/bw0ykzD48ASUSXmtX3kS+dL8VWyISCTngoxUy9rWsRF5bF5ookd6mVDV99Dva9G+/0yVSJUHeb42QbhJaErFrNRywa11MsUaITkNqSMSuZdfqV5Q1QnYcQksihIukhkRINwktiRAukhplImTwhNbw30GJ4KTmLZEdP4VuMxkhVAkAAAAASUVORK5CYII=" />
              </Link>
            </div>
            <div className="col">
              <Link to="/settings">
                <img alt="Configuración" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABg0lEQVRoQ+2Z4VHDMAyFv04AGxQmADbpCGzACMAEMAIbQScoTAAbwOkuuStpk0P2c2V8zs9cKuvTk+y8dEUj16oRDnJAnoANcDEU4x14AR4jipMK8gzczSRsIA+nhkkF+QTOgRvgbUj6GngFTJnL/wLyPSQ6LcTc/eJcqYpUDWJtYe3huZYUGWE98bzPWltbe//atezmlTNSNMh2LH6TreURo+oZ8YB8AWcz2+/H3iHpiZn1bGpr2YF338KBaAwGcwusByBTwl5RTn6qT3etLGmjf5zaWtF5H6zfQWqTpCsiVERi0KIVkRm0aBCZQYsGkb2zNQmSYqxUM5/qa2TGKhok21ipAPqMTCsZPewygxYNIjNo0SAyg1YDiGTj6CCSMgqDdEWExZSE8ioiMUGSzCdBPCAyExQNIjNB0SCyF7wOslCB/RnZ/fEreqoJKiHEUWNl/8aOH6SXFq0JJMlY9Rkp0VM5xkpmgkqAeQ5EmQmKBpGZoBpASuQgielpLcmCpYL8ACjUZjO0jeaUAAAAAElFTkSuQmCC" />
              </Link>
            </div>
            <div className="col">
              <Link onClick={this.onClick} to="/logout">
                <img alt="Cerrar sesión" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABNklEQVRoQ+3a2w3CMAxA0dsN2ASYABiBSRkBNgA2YQOQK8pDSptUMcSWnF8qN8dxYrW0A87AijbjAqw1bt0Bd41AFTFkDtXjE6IScMaMhgSq3DcgMzI/dmmsSCozUVpRWu8MxB6JPaKwH34eouWppYoLiGo6FYJZXpEDsAD2wC1ntQw5ARtAnll2OYxliKyGYJYlGMsQqaZijHVIMcYDpAjjBZLFeIJMYrxBRjG1kJbvxIYe2feZWogEkXO+5bgC21pIC4D0luPz7WiPkK7vDZJESDY9QUYRniCTCC+QLMIDpAhhHVKMsA4Zmu3riJ066y2fWtJsZfR9ItewLENyc//6PSCz0vWHi2NFFJIcfyukktiytGJFYkUUNnYqRJRWlJa30vrRfLNh1b4OavluSp41VD56ewAu3H5TFGwgqQAAAABJRU5ErkJggg==" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
