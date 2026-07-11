import React from 'react';
import './index.css'
import { useMyContext } from './ContextVar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigationbar = () => {
  const { menuSelected, setMenuSelected, showMenu, setShowMenu } = useMyContext();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isSelected = (value) => menuSelected === value;

  return (
    <nav className="navbar">
      <div id="navcontainer">
        <div id="my_name">RAJAN</div>
        <div id='site-menu' className="menu_container">
          <div className={`buttons ${isSelected("home") ? "active" : ""}`} id='home-menu' onClick={() => setMenuSelected("home")}>HOME</div>
          <div className={`buttons ${isSelected("about") ? "active" : ""}`} id='about-menu' onClick={() => setMenuSelected("about")}>ABOUT ME</div>
          <div className={`buttons ${isSelected("projects") ? "active" : ""}`} id='blog-menu' onClick={() => setMenuSelected("projects")}>PROJECTS</div>
          <div className={`buttons ${isSelected("contact") ? "active" : ""}`} id='contactus-menu' onClick={() => setMenuSelected("contact")}>CONTACT</div>
        </div>
        <div id="nav-menu" className="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} id='hamburger' style={{ fontSize: "28px", color: "white" }} />
          {showMenu &&
            <div className="dropdown-content">
              <div className={`menu_button ${isSelected("home") ? "active" : ""}`} onClick={() => setMenuSelected("home")}>Home</div>
              <div className={`menu_button ${isSelected("about") ? "active" : ""}`} onClick={() => setMenuSelected("about")}>About</div>
              <div className={`menu_button ${isSelected("projects") ? "active" : ""}`} onClick={() => setMenuSelected("projects")}>Projects</div>
              <div className={`menu_button ${isSelected("contact") ? "active" : ""}`} onClick={() => setMenuSelected("contact")}>Contact</div>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigationbar;