import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import { useContext } from "react";
import LanguageContext from "../context/language";


const Header = () => {
  const cart = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  const { language, setLanguage } = useContext(LanguageContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Recipes App</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-between w-100">
            <div>
              <Link className="nav-link" to="/">
                Product List
              </Link>
            </div>
            <div className="d-flex">
              
              <Link className="nav-link" to="/register">
              Register <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link className="nav-link" to="/cart">
                  Cart {cart} <FontAwesomeIcon icon={faCartShopping}/>
              </Link>
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown">
                  {language === "ar" ? "العربية" : "English"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => setLanguage("en")}>English</button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => setLanguage("ar")}>العربية</button>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>

    )
}  


export default Header;