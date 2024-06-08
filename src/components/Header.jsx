import React, { useState } from "react";
import "../App.css";
import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";
import coffee from "../assets/coffee.png";
import menu from "../assets/menu.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src={logoDark} alt="logo" className="nav__logo-dark" />
              <img src={logoWhite} alt="logo" className="nav__logo-white" />
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}>
              <img src={menu} alt="" />
            </i>
          </div>
        </div>
        <ul className={isOpen ? "nav__links open" : "nav__links"}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#special">SPECIAL</a>
          </li>
          <li>
            <a href="#menu">MENU</a>
          </li>
          <li>
            <a href="#event">EVENTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <div className="section__container header__container" id="home">
        <div className="header__image">
          <img src={coffee} alt="header" />
        </div>
        <div className="header__content">
          <h2>IT IS GOOD TIME FOR THE GREATE TASTE OF TEA</h2>
          <h1>
            TEA
            <br />
            <span>LOVERS</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
