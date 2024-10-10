import React from 'react';
import { NavLink } from 'react-router-dom';
import './MyHeader.scss'; // fichier CSS 
import Logo from "../../assets/image/kasa_red.svg" // Nom du logo 

const Header = () => {  // Nom du composant
  return (
    <header className="header">  {/* Nom de la classe en-tete*/}
      <div className="logo">    {/* Nom de la classe image*/}
        <img src={Logo} alt="Logo de la page d'accueil" />
      </div>
      <nav className="navbar">  {/* Nom de la classe navigation*/}
        <ul>
          <li>
            <NavLink
              to="/" //Page d'acceuil react router
              className={({ isActive }) => isActive ? 'active' : ''} //Si active on prend les paramtere de scss
              
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about" //a propos react router
              className={({ isActive }) => isActive ? 'active' : ''}  //Si active on prend les paramtere de scss
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;  // Le nom d'exportation
