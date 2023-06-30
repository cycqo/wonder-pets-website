import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../img/dog.png";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <div>
        <img className="logo" onClick={handleHomeClick} src={Logo} />
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="rightSide">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About us
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
