import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from "../Carrito/CartWidget";
import { Link } from "react-router-dom";
import logo from "../../assets/petshop.jpg"
import './NavBar.css';

const NavBar = () => {

  return (

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <img src={logo} alt="Logo" className="logo"/>
        <Link to="/" className="navbar-brand">Brooklin Pet Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/Nosotros" className="nav-link">Nosotros</Link>
            </li>

            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catalogo
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/items/Gato" className="dropdown-item" >Gatos</Link></li>
                <li><Link to="/items/Perro" className="dropdown-item" >Perros </Link></li>
              </ul>
            </li>
          </ul>
          <Carrito />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

