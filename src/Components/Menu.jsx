import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Menu.css"

function Menu(){

  return(
    <div>
      <nav className="navbar navbar-expand-md navbar-dark" id="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Actividad Evaluada</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
              <li className="nav-item sub" id="celulares">
                <Link to="/celulares" className="nav-link active">Celulares</Link>
              </li>
              <li className="nav-item sub" id="juegos">
                <Link to="/juegos" className="nav-link active">Juegos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu