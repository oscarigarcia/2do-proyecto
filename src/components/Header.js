import React from "react";
import "../styles/components/Header.scss"

const Header = () => (
  <div className="header">
    <img
      className="header__img"
      src="../assets/logo-platzi-video-BW2.png"
      alt="Platzi Video"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../assets/user-icon.png" alt="" /><p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
